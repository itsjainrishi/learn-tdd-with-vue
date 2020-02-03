<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  props: ['messages'],
};
</script>