<template>
  <div>
    <div class="header-action">
      <h2>Gestión de Usuarios</h2>
      <button @click="agregarUsuario" class="btn-add">+ Nuevo Usuario</button>
    </div>
    
    <p>Observa cómo al agregar usuarios, Vue usa el <code>:key</code> para saber cuál es nuevo.</p>

    <div class="user-list">
      <div v-for="user in usuarios" :key="user.id" class="user-row">
        <div class="avatar">{{ user.nombre.charAt(0) }}</div>
        <div class="user-info">
          <strong>{{ user.nombre }}</strong>
          <small>ID Único: {{ user.id }}</small>
        </div>
      </div>
      
      <div v-if="usuarios.length === 0" class="empty-state">
        No hay usuarios registrados.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [
        { id: 101, nombre: 'Ana García' },
        { id: 102, nombre: 'Carlos Ruiz' },
        { id: 103, nombre: 'Lucía Méndez' }
      ],
      nextId: 104
    }
  },
  methods: {
    agregarUsuario() {
      this.usuarios.push({ 
        id: this.nextId++, 
        nombre: `Usuario ${this.nextId - 1}` 
      });
    }
  }
}
</script>

<style scoped>
.header-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-add {
  background-color: var(--dark);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.btn-add:hover { background-color: black; }

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-row {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 5px solid var(--primary);
}

.avatar {
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
}

.user-info { display: flex; flex-direction: column; }
.user-info small { color: #888; font-size: 0.85rem; }
.empty-state { text-align: center; color: #999; padding: 20px; }
</style>