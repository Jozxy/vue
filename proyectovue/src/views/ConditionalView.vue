<template>
  <div class="page-content">
    <header class="page-header">
      <h1>🎯 v-if / v-else-if / v-else</h1>
      <p>Directiva de renderizado condicional que crea o destruye elementos del DOM según la condición.</p>
    </header>

    <div class="info-box">
      <h4>📚 ¿Cómo funciona?</h4>
      <ul>
        <li><code>v-if</code>: Renderiza solo si la condición es verdadera</li>
        <li><code>v-else-if</code>: Condición alternativa intermedia</li>
        <li><code>v-else</code>: Se ejecuta cuando todas las anteriores son falsas</li>
        <li><strong>Importante:</strong> El elemento se elimina completamente del DOM cuando es falso</li>
      </ul>
    </div>

    <section class="demo-section">
      <h2>🎮 Demo Interactiva: Sistema de Niveles</h2>
      <p>Selecciona un nivel para ver cómo cambia el contenido dinámicamente:</p>
      
      <div class="level-selector">
        <button 
          v-for="level in levels" 
          :key="level.value"
          @click="nivel = level.value"
          :class="['level-btn', { active: nivel === level.value }]"
        >
          <span class="btn-icon">{{ level.icon }}</span>
          <span class="btn-text">{{ level.name }}</span>
        </button>
      </div>

      <div class="result-container" :class="resultClass">
        <div class="result-icon">{{ resultIcon }}</div>
        <h3 v-if="nivel === 1">🌱 Nivel Principiante</h3>
        <p v-if="nivel === 1">Estás comenzando tu camino en Vue.js. ¡Cada experto fue alguna vez principiante!</p>
        
        <h3 v-else-if="nivel === 2">🚀 Nivel Intermedio</h3>
        <p v-else-if="nivel === 2">Ya dominas las bases. ¡Sigue practicando para llegar al siguiente nivel!</p>
        
        <h3 v-else>🏆 Nivel Experto</h3>
        <p v-else>¡Felicidades! Has dominado las directivas condicionales de Vue.js.</p>
        
        <div class="status-badge" :class="badgeClass">{{ statusText }}</div>
      </div>
    </section>

    <section class="code-section">
      <h2>💻 Estructura del Código</h2>
      <div class="code-block">
        <pre><code>&lt;p v-if="nivel === 1"&gt;Nivel Bajo&lt;/p&gt;
&lt;p v-else-if="nivel === 2"&gt;Nivel Medio&lt;/p&gt;
&lt;p v-else&gt;Nivel Alto&lt;/p&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nivel: 1,
      levels: [
        { value: 1, name: 'Principiante', icon: '🌱' },
        { value: 2, name: 'Intermedio', icon: '🚀' },
        { value: 3, name: 'Experto', icon: '🏆' }
      ]
    }
  },
  computed: {
    resultClass() {
      return {
        'result-low': this.nivel === 1,
        'result-mid': this.nivel === 2,
        'result-high': this.nivel === 3
      }
    },
    resultIcon() {
      return this.levels.find(l => l.value === this.nivel)?.icon || '🌱'
    },
    statusText() {
      return this.levels.find(l => l.value === this.nivel)?.name || 'Principiante'
    },
    badgeClass() {
      return {
        'badge-low': this.nivel === 1,
        'badge-mid': this.nivel === 2,
        'badge-high': this.nivel === 3
      }
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
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-section {
  margin: 40px 0;
}

.level-selector {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.level-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 30px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  min-width: 120px;
}

.level-btn:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.level-btn.active {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-color: var(--primary);
  color: white;
  box-shadow: 0 8px 25px rgba(66, 185, 131, 0.4);
}

.btn-icon {
  font-size: 2rem;
}

.btn-text {
  font-weight: 600;
  font-size: 0.9rem;
}

.result-container {
  padding: 40px;
  border-radius: var(--radius);
  text-align: center;
  transition: var(--transition);
}

.result-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.result-low { background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%); }
.result-mid { background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); }
.result-high { background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); }

.status-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.badge-low { background: var(--success); color: white; }
.badge-mid { background: var(--warning); color: var(--dark); }
.badge-high { background: var(--danger); color: white; }

.code-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px dashed #e0e0e0;
}

.code-block {
  background: #2d3436;
  border-radius: var(--radius);
  padding: 25px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: #a8edea;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  background: none;
  padding: 0;
}
</style>