<template>
  <div>
    <h2>Interruptor de Visibilidad</h2>
    <p>Usa el interruptor para ocultar el contenido sin eliminarlo del DOM.</p>
    
    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" v-model="mostrarCaja">
        <span class="slider"></span>
      </label>
      <span>{{ mostrarCaja ? 'Visible' : 'Oculto' }}</span>
    </div>

    <div v-show="mostrarCaja" class="info-card">
      <div class="icon">👁️</div>
      <h3>¡Aquí estoy!</h3>
      <p>Si apagas el interruptor, este elemento recibe <code>display: none</code> pero sigue existiendo en la memoria.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { mostrarCaja: true } }
}
</script>

<style scoped>
.toggle-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  font-weight: 600;
}

/* Estilo del Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(26px); }

/* Tarjeta de información */
.info-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(118, 75, 162, 0.3);
}
.info-card .icon { font-size: 3rem; margin-bottom: 10px; }
.info-card code {
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>