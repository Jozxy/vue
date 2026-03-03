<template>
  <div class="page-content">
    <header class="page-header">
      <h1>🔑 v-bind:key</h1>
      <p>Propiedad única que ayuda a Vue a identificar y rastrear elementos en listas.</p>
    </header>

    <div class="info-box">
      <h4>📚 ¿Por qué es importante?</h4>
      <ul>
        <li><code>:key</code>: Identificador único para cada elemento</li>
        <li>Permite a Vue optimizar el renderizado</li>
        <li>Evita bugs al modificar listas (agregar/eliminar/ordenar)</li>
        <li><strong>Mejor práctica:</strong> Usar IDs únicos, no el índice del array</li>
      </ul>
    </div>

    <section class="demo-section">
      <div class="panel-header">
        <h2>👥 Gestión de Usuarios</h2>
        <button @click="agregarUsuario" class="btn-primary">
          <span>➕</span> Agregar Usuario
        </button>
      </div>
      
      <p>Cada usuario tiene un <code>ID único</code> que se usa como <code>:key</code> para que Vue pueda rastrearlos eficientemente:</p>

      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-icon">👤</span>
          <div class="stat-content">
            <span class="stat-value">{{ usuarios.length }}</span>
            <span class="stat-label">Total Usuarios</span>
          </div>
        </div>
        <div class="stat-card">
          <span class="stat-icon">🆔</span>
          <div class="stat-content">
            <span class="stat-value">{{ maxId }}</span>
            <span class="stat-label">Último ID</span>
          </div>
        </div>
        <div class="stat-card">
          <span class="stat-icon">🔄</span>
          <div class="stat-content">
            <span class="stat-value">{{ contadorCambios }}</span>
            <span class="stat-label">Cambios</span>
          </div>
        </div>
      </div>

      <div class="users-list">
        <div 
          v-for="user in usuarios" 
          :key="user.id" 
          class="user-card"
          :class="{ 'new-user': user.esNuevo }"
        >
          <div class="user-avatar" :style="{ background: user.color }">
            {{ user.nombre.charAt(0).toUpperCase() }}
          </div>
          <div class="user-details">
            <h4 class="user-name">{{ user.nombre }}</h4>
            <div class="user-meta">
              <span class="meta-item">
                <span class="meta-icon">🆔</span>
                <span>ID: {{ user.id }}</span>
              </span>
              <span class="meta-item">
                <span class="meta-icon">📅</span>
                <span>{{ user.fecha }}</span>
              </span>
            </div>
          </div>
          <div class="user-actions">
            <button @click="eliminarUsuario(user.id)" class="btn-delete">
              🗑️
            </button>
          </div>
        </div>

        <div v-if="usuarios.length === 0" class="empty-state">
          <span class="empty-icon">📭</span>
          <h3>No hay usuarios registrados</h3>
          <p>Agrega tu primer usuario para comenzar.</p>
        </div>
      </div>

      <div class="actions-row">
        <button @click="limpiarTodos" class="btn-secondary" :disabled="usuarios.length === 0">
          🧹 Limpiar Todo
        </button>
        <button @click="resetearDemo" class="btn-outline">
          🔄 Resetear Demo
        </button>
      </div>
    </section>

    <section class="code-section">
      <h2>💻 Estructura del Código</h2>
      <div class="code-block">
        <pre><code>&lt;div v-for="user in usuarios" :key="user.id"&gt;
  &lt;h4&gt;{{ user.nombre }}&lt;/h4&gt;
  &lt;span&gt;ID: {{ user.id }}&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
      <div class="key-explanation">
        <h4>⚠️ ¿Por qué usar :key?</h4>
        <p>Sin <code>:key</code>, Vue usa el orden de los elementos para identificarlos. Cuando la lista cambia, esto puede causar:</p>
        <ul>
          <li>❌ Renderizado incorrecto</li>
          <li>❌ Pérdida de estado local</li>
          <li>❌ Bugs difíciles de detectar</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [
        { id: 1, nombre: 'Ana García', color: '#fd79a8', fecha: '2024-01-15', esNuevo: false },
        { id: 2, nombre: 'Carlos Ruiz', color: '#6c5ce7', fecha: '2024-01-16', esNuevo: false },
        { id: 3, nombre: 'Lucía Méndez', color: '#00b894', fecha: '2024-01-17', esNuevo: false },
        { id: 4, nombre: 'David López', color: '#fdcb6e', fecha: '2024-01-18', esNuevo: false }
      ],
      nextId: 5,
      contadorCambios: 0
    }
  },
  computed: {
    maxId() {
      return this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) : 0
    }
  },
  methods: {
    agregarUsuario() {
      const nombres = ['María', 'Juan', 'Sofía', 'Pedro', 'Elena', 'Miguel'];
      const colores = ['#fd79a8', '#6c5ce7', '#00b894', '#fdcb6e', '#74b9ff', '#a29bfe'];
      const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      
      this.usuarios.push({
        id: this.nextId++,
        nombre: `${nombreAleatorio} ${this.nextId - 1}`,
        color: colorAleatorio,
        fecha: new Date().toISOString().split('T')[0],
        esNuevo: true
      });
      this.contadorCambios++;
      
      setTimeout(() => {
        const ultimo = this.usuarios[this.usuarios.length - 1];
        if (ultimo) ultimo.esNuevo = false;
      }, 2000);
    },
    eliminarUsuario(id) {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
      this.contadorCambios++;
    },
    limpiarTodos() {
      this.usuarios = [];
      this.contadorCambios++;
    },
    resetearDemo() {
      this.usuarios = [
        { id: 1, nombre: 'Ana García', color: '#fd79a8', fecha: '2024-01-15', esNuevo: false },
        { id: 2, nombre: 'Carlos Ruiz', color: '#6c5ce7', fecha: '2024-01-16', esNuevo: false },
        { id: 3, nombre: 'Lucía Méndez', color: '#00b894', fecha: '2024-01-17', esNuevo: false },
        { id: 4, nombre: 'David López', color: '#fdcb6e', fecha: '2024-01-18', esNuevo: false }
      ];
      this.nextId = 5;
      this.contadorCambios = 0;
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
  background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-section {
  margin: 40px 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 185, 131, 0.4);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: var(--light);
  padding: 20px;
  border-radius: var(--radius);
}

.stat-icon {
  font-size: 2rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--gray);
  text-transform: uppercase;
}

.users-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border-left: 5px solid var(--primary);
  transition: var(--transition);
}

.user-card.new-user {
  animation: highlight 1s ease;
  border-left-color: var(--accent);
}

@keyframes highlight {
  0%, 100% { background: white; }
  50% { background: #fff3e0; }
}

.user-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-hover);
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 1.1rem;
  color: var(--dark);
  margin-bottom: 8px;
}

.user-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--gray);
}

.meta-icon {
  font-size: 0.9rem;
}

.user-actions {
  flex-shrink: 0;
}

.btn-delete {
  width: 40px;
  height: 40px;
  border: none;
  background: #ffeaa7;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: var(--transition);
}

.btn-delete:hover {
  background: var(--danger);
  color: white;
  transform: scale(1.1);
}

.actions-row {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-secondary {
  padding: 12px 24px;
  background: var(--light);
  color: var(--dark);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-secondary:hover:not(:disabled) {
  background: #dfe6e9;
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-outline {
  padding: 12px 24px;
  background: transparent;
  color: var(--dark);
  border: 2px solid var(--dark);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-outline:hover {
  background: var(--dark);
  color: white;
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

.empty-state h3 {
  color: var(--dark);
  margin-bottom: 10px;
}

.code-section {
  margin-top: 50px;
  padding-top: 40px;
  border-top: 2px dashed #e0e0e0;
}

.code-block {
  background: #2d3436;
  border-radius: var(--radius);
  padding: 25px;
  overflow-x: auto;
  margin-bottom: 25px;
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

.key-explanation {
  background: #fff3cd;
  border-left: 4px solid var(--warning);
  padding: 25px;
  border-radius: var(--radius);
}

.key-explanation h4 {
  color: var(--dark);
  margin-bottom: 15px;
}

.key-explanation ul {
  margin-left: 20px;
  color: var(--gray);
}

.key-explanation li {
  margin-bottom: 8px;
}
</style>