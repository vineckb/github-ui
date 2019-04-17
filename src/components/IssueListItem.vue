<template functional>
  <li>
    <a :href="`/issue/${props.issue.number}`">
      {{props.issue.title}}
    </a>
  </li>
</template>
