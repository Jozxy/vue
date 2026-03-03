<template>
  <div>
    <h2>Lista de Frutas</h2>
    <p>Iterando sobre un array de objetos para crear elementos repetidos.</p>

    <div class="grid-list">
      <div v-for="fruta in frutas" :key="fruta.nombre" class="item-card">
        <div class="emoji">{{ fruta.emoji }}</div>
        <div class="details">
          <h4>{{ fruta.nombre }}</h4>
          <span class="price">${{ fruta.precio.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frutas: [
        { nombre: 'Manzana', precio: 1.50, emoji: '🍎' },
        { nombre: 'Plátano', precio: 0.80, emoji: '🍌' },
        { nombre: 'Uvas', precio: 3.20, emoji: '🍇' },
        { nombre: 'Sandía', precio: 5.00, emoji: '🍉' }
      ]
    }
  }
}
</script>

<style scoped>
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.item-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.emoji { font-size: 3rem; margin-bottom: 10px; display: block; }
.details h4 { margin: 0; color: var(--dark); }
.price { color: var(--primary); font-weight: bold; font-size: 1.1rem; }
</style>