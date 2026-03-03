<template>
  <div>
    <h2>Selector de Nivel</h2>
    <p>Selecciona un nivel para ver cómo cambia el contenido dinámicamente.</p>
    
    <div class="btn-group">
      <button @click="nivel = 1" :class="{ active: nivel === 1 }">Nivel 1</button>
      <button @click="nivel = 2" :class="{ active: nivel === 2 }">Nivel 2</button>
      <button @click="nivel = 3" :class="{ active: nivel === 3 }">Nivel 3</button>
    </div>

    <div class="status-box" :class="claseEstado">
      <h3 v-if="nivel === 1">🌱 Principiante</h3>
      <p v-if="nivel === 1">Estás aprendiendo lo básico. ¡Sigue así!</p>

      <h3 v-else-if="nivel === 2">🚀 Intermedio</h3>
      <p v-else-if="nivel === 2">Ya dominas las directivas principales.</p>

      <h3 v-else>🏆 Experto</h3>
      <p v-else>¡Nada te detiene! Dominas Vue.js.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { nivel: 1 }
  },
  computed: {
    claseEstado() {
      if (this.nivel === 1) return 'status-low';
      if (this.nivel === 2) return 'status-mid';
      return 'status-high';
    }
  }
}
</script>

<style scoped>
.btn-group {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

button:hover { border-color: var(--primary); }
button.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.status-box {
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.status-low { background-color: #e0f7fa; color: #006064; border: 1px solid #b2ebf2; }
.status-mid { background-color: #fff3e0; color: #e65100; border: 1px solid #ffe0b2; }
.status-high { background-color: #e8f5e9; color: #1b5e20; border: 1px solid #c8e6c9; }
</style>