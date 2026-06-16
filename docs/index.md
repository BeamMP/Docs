---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // Redirects incoming root traffic to the /en/ folder
  router.go('/en/')
})
</script>
