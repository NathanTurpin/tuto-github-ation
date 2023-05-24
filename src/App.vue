<script setup>
import { ref } from "vue";
import { passwordValidator } from "@/utils/passwordValidator";

const password = ref("");
const errors = ref([]);

const submitForm = () => {
  const { isValid, errorsMess } = passwordValidator(password.value);

  console.log(isValid, errorsMess);
  if (!isValid) {
    errors.value.push(errorsMess);
    return;
  }

  // Soumettez le formulaire ici
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="password">Mot de passe</label>
      <input id="password" type="password" v-model="password" />
    </div>

    <div>
      <ul id="error">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>

    <button type="submit" id="submit">S'inscrire</button>
  </form>
</template>


