<template>
  <div class="app-wrapper">
    <header class="main-header">
      <div class="header-content">
        <div class="logo">
          <span class="logo-icon">🚀</span>
          <span class="logo-text">Vue Directivas</span>
        </div>
        <nav class="main-nav">
          <router-link to="/" class="nav-item">
            <span class="nav-icon">🎯</span>
            <span>v-if / v-else</span>
          </router-link>
          <router-link to="/v-show" class="nav-item">
            <span class="nav-icon">👁️</span>
            <span>v-show</span>
          </router-link>
          <router-link to="/v-for" class="nav-item">
            <span class="nav-icon">📋</span>
            <span>v-for</span>
          </router-link>
          <router-link to="/keys" class="nav-item">
            <span class="nav-icon">🔑</span>
            <span>v-bind:key</span>
          </router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <div class="content-card">
        <router-view />
      </div>
    </main>

    <footer class="main-footer">
      <p>Proyecto Educativo Vue.js - Directivas Fundamentales</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.main-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation */
.main-nav {
  display: flex;
  gap: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 50px;
  text-decoration: none;
  color: var(--gray);
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
}

.nav-item:hover {
  background: var(--light);
  color: var(--primary);
  transform: translateY(-2px);
}

.nav-item.router-link-active {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.nav-icon {
  font-size: 1.1rem;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.content-card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 50px;
  max-width: 900px;
  width: 100%;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Footer */
.main-footer {
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  color: white;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .content-card {
    padding: 30px 20px;
  }
}
</style>