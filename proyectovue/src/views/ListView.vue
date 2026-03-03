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
        <li><strong>Importante:</strong> Siempre usa <code>:key</code> para mejor rendimiento</li>
      </ul>
    </div>

    <section class="demo-section">
      <h2>🛒 Catálogo de Productos</h2>
      <p>Lista generada dinámicamente usando <code>v-for</code>:</p>
      
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
              <button class="add-btn" @click="agregarAlCarrito(producto)">+</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="productosFiltrados.length === 0" class="no-results">
        <p>No hay productos en esta categoría.</p>
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
          <span class="stat-number">{{ carrito }}</span>
          <span class="stat-label">En Carrito</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtroActual: 'todos',
      carrito: 0,
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
    }
  },
  methods: {
    agregarAlCarrito(producto) {
      this.carrito++
      alert(`¡${producto.nombre} agregado al carrito! 🛒`)
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
  margin-bottom: 10px;
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
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #42b983;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #42b983 0%, #359469 100%);
  border-color: #42b983;
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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
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
  color: #2d3436;
  margin-bottom: 5px;
  font-weight: 600;
}

.product-category {
  font-size: 0.8rem;
  color: #636e72;
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
  color: #42b983;
}

.add-btn {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #42b983 0%, #359469 100%);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.no-results {
  text-align: center;
  padding: 40px;
  background: #f5f6fa;
  border-radius: 16px;
  margin-bottom: 30px;
  color: #636e72;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  background: #f5f6fa;
  padding: 25px;
  border-radius: 16px;
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
  background: linear-gradient(135deg, #42b983 0%, #6c5ce7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: #636e72;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>