<template>
  <div>
    privetiki
  </div>
</template>

<script>
export default {
  asyncData (context) {
    const { redirect } = context
    redirect('/1')
  }
}
</script>
