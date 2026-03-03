<template>
  <div class="page-content">
    <header class="page-header">
      <h1>👁️ v-show</h1>
      <p>Directiva de visibilidad que oculta/muestra elementos usando CSS (display: none).</p>
    </header>

    <div class="info-box">
      <h4>📚 ¿Cómo funciona?</h4>
      <ul>
        <li><code>v-show</code>: Alterna la propiedad CSS <code>display</code></li>
        <li>El elemento <strong>siempre existe</strong> en el DOM</li>
        <li>Ideal para elementos que se muestran/ocultan frecuentemente</li>
        <li><strong>Ventaja:</strong> Menos costoso que v-if para toggles frecuentes</li>
      </ul>
    </div>

    <section class="demo-section">
      <h2>🎛️ Panel de Control</h2>
      <p>Usa el interruptor para mostrar u ocultar el contenido:</p>
      
      <div class="control-panel">
        <div class="toggle-wrapper">
          <label class="toggle-label">
            <span class="label-text">Visibilidad del Contenido</span>
            <div class="toggle-switch">
              <input type="checkbox" v-model="mostrarCaja">
              <span class="slider"></span>
            </div>
            <span class="toggle-status" :class="{ active: mostrarCaja }">
              {{ mostrarCaja ? 'VISIBLE' : 'OCULTO' }}
            </span>
          </label>
        </div>

        <div class="indicator">
          <div class="indicator-dot" :class="{ active: mostrarCaja }"></div>
          <span>Estado: {{ mostrarCaja ? 'Activo' : 'Inactivo' }}</span>
        </div>
      </div>

      <div v-show="mostrarCaja" class="content-box">
        <div class="box-header">
          <span class="box-icon">✨</span>
          <h3>¡Contenido Visible!</h3>
        </div>
        <div class="box-body">
          <p>Este elemento está siendo controlado por <code>v-show</code>.</p>
          <p>Cuando lo ocultas, el elemento permanece en el DOM pero con <code>display: none</code>.</p>
          <div class="tech-details">
            <div class="tech-item">
              <span class="tech-label">En DOM:</span>
              <span class="tech-value">✅ Sí</span>
            </div>
            <div class="tech-item">
              <span class="tech-label">Display:</span>
              <span class="tech-value">{{ mostrarCaja ? 'block' : 'none' }}</span>
            </div>
            <div class="tech-item">
              <span class="tech-label">Renderizado:</span>
              <span class="tech-value">Una sola vez</span>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!mostrarCaja" class="empty-state">
        <span class="empty-icon">🙈</span>
        <p>El contenido está oculto pero sigue existiendo en el DOM.</p>
      </div>
    </section>

    <section class="comparison-section">
      <h2>⚖️ v-show vs v-if</h2>
      <div class="comparison-grid">
        <div class="comparison-card v-show-card">
          <h3>v-show</h3>
          <ul>
            <li>✅ Toggle CSS (display)</li>
            <li>✅ Elemento siempre en DOM</li>
            <li>✅ Mejor para toggles frecuentes</li>
            <li>❌ No funciona con &lt;template&gt;</li>
          </ul>
        </div>
        <div class="comparison-card v-if-card">
          <h3>v-if</h3>
          <ul>
            <li>✅ Crea/destruye elemento</li>
            <li>✅ Puede usar &lt;template&gt;</li>
            <li>✅ Mejor para condiciones raras</li>
            <li>❌ Más costoso en toggles</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarCaja: true
    }
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-section {
  margin: 40px 0;
}

.control-panel {
  background: var(--light);
  border-radius: var(--radius);
  padding: 30px;
  margin-bottom: 30px;
}

.toggle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}

.label-text {
  font-weight: 600;
  color: var(--dark);
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  width: 70px;
  height: 36px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: var(--transition);
  border-radius: 36px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: var(--transition);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

input:checked + .slider {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
}

input:checked + .slider:before {
  transform: translateX(34px);
}

.toggle-status {
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: #e0e0e0;
  color: var(--gray);
  transition: var(--transition);
}

.toggle-status.active {
  background: var(--success);
  color: white;
}

.indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--gray);
  font-size: 0.9rem;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--danger);
  transition: var(--transition);
}

.indicator-dot.active {
  background: var(--success);
  box-shadow: 0 0 10px var(--success);
}

/* Content Box */
.content-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius);
  padding: 40px;
  color: white;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  animation: slideIn 0.4s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.box-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.box-icon {
  font-size: 2.5rem;
}

.box-header h3 {
  color: white;
  margin: 0;
}

.box-body p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
}

.box-body code {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.tech-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.tech-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
}

.tech-value {
  font-weight: 600;
  font-size: 1rem;
}

.empty-state {
  text-align: center;
  padding: 60px 40px;
  background: var(--light);
  border-radius: var(--radius);
  border: 2px dashed #ccc;
}

.empty-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 15px;
}

/* Comparison Section */
.comparison-section {
  margin-top: 50px;
  padding-top: 40px;
  border-top: 2px dashed #e0e0e0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.comparison-card {
  padding: 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.comparison-card h3 {
  margin-bottom: 20px;
  text-align: center;
}

.v-show-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.v-if-card {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
}

.comparison-card ul {
  list-style: none;
}

.comparison-card li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
}

.comparison-card li:last-child {
  border-bottom: none;
}
</style>