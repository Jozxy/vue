<template>
  <div class="page-content">
    <header class="page-header">
      <h1>📋 v-for</h1>
      <p>Directiva de iteración que renderiza una lista de elementos basados en un array.</p>
    </header>

    <div class="info-box">
      <h4>📚 ¿Cómo funciona?</h4>
      <ul>
        <li><code>v-for="item in items"</code>: Itera sobre arrays</li>
        <li><code>v-for="(item, index) in items"</code>: Con índice</li>
        <li><code>v-for="(value, key) in object"</code>: Para objetos</li>
        <li><strong>Importante:</strong> Siempre usa <code>:key</code> para mejor rendimiento</li>
      </ul>
    </div>

    <section class="demo-section">
      <h2>🛒 Catálogo de Productos</h2>
      <p>Lista generada dinámicamente usando <code>v-for</code> sobre un array de objetos:</p>
      
      <div class="filter-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="filtroActual = cat.id"
          :class="['filter-btn', { active: filtroActual === cat.id }]"
        >
          {{ cat.icon }} {{ cat.name }}
        </button>
      </div>

      <div class="products-grid">
        <div 
          v-for="producto in productosFiltrados" 
          :key="producto.id"
          class="product-card"
        >
          <div class="product-image">{{ producto.emoji }}</div>
          <div class="product-info">
            <h4 class="product-name">{{ producto.nombre }}</h4>
            <p class="product-category">{{ producto.categoria }}</p>
            <div class="product-footer">
              <span class="product-price">${{ producto.precio.toFixed(2) }}</span>
              <button class="add-btn">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-number">{{ productosFiltrados.length }}</span>
          <span class="stat-label">Productos</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${{ totalPrecio }}</span>
          <span class="stat-label">Valor Total</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ categoriasActivas }}</span>
          <span class="stat-label">Categorías</span>
        </div>
      </div>
    </section>

    <section class="code-section">
      <h2>💻 Estructura del Código</h2>
      <div class="code-block">
        <pre><code>&lt;div v-for="producto in productos" :key="producto.id"&gt;
  &lt;h4&gt;{{ producto.nombre }}&lt;/h4&gt;
  &lt;span&gt;${{ producto.precio }}&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtroActual: 'todos',
      categories: [
        { id: 'todos', name: 'Todos', icon: '📦' },
        { id: 'frutas', name: 'Frutas', icon: '🍎' },
        { id: 'verduras', name: 'Verduras', icon: '🥬' },
        { id: 'postres', name: 'Postres', icon: '🍰' }
      ],
      productos: [
        { id: 1, nombre: 'Manzana', precio: 1.50, categoria: 'frutas', emoji: '🍎' },
        { id: 2, nombre: 'Plátano', precio: 0.80, categoria: 'frutas', emoji: '🍌' },
        { id: 3, nombre: 'Naranja', precio: 1.20, categoria: 'frutas', emoji: '🍊' },
        { id: 4, nombre: 'Uvas', precio: 3.50, categoria: 'frutas', emoji: '🍇' },
        { id: 5, nombre: 'Lechuga', precio: 2.00, categoria: 'verduras', emoji: '🥬' },
        { id: 6, nombre: 'Zanahoria', precio: 1.00, categoria: 'verduras', emoji: '🥕' },
        { id: 7, nombre: 'Brócoli', precio: 2.50, categoria: 'verduras', emoji: '🥦' },
        { id: 8, nombre: 'Pastel', precio: 5.00, categoria: 'postres', emoji: '🍰' },
        { id: 9, nombre: 'Helado', precio: 3.00, categoria: 'postres', emoji: '🍦' },
        { id: 10, nombre: 'Chocolate', precio: 2.50, categoria: 'postres', emoji: '🍫' }
      ]
    }
  },
  computed: {
    productosFiltrados() {
      if (this.filtroActual === 'todos') {
        return this.productos
      }
      return this.productos.filter(p => p.categoria === this.filtroActual)
    },
    totalPrecio() {
      return this.productosFiltrados.reduce((sum, p) => sum + p.precio, 0).toFixed(2)
    },
    categoriasActivas() {
      return new Set(this.productosFiltrados.map(p => p.categoria)).size
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
  background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-section {
  margin: 40px 0;
}

.filter-tabs {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-color: var(--primary);
  color: white;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.product-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.product-image {
  height: 120px;
  background: linear-gradient(135deg, #f5f6fa 0%, #dfe6e9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 1.1rem;
  color: var(--dark);
  margin-bottom: 5px;
}

.product-category {
  font-size: 0.8rem;
  color: var(--gray);
  text-transform: capitalize;
  margin-bottom: 15px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
}

.add-btn {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
}

.add-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  background: var(--light);
  padding: 25px;
  border-radius: var(--radius);
  flex-wrap: wrap;
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 1px;
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