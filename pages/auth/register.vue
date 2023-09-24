<script setup>
const auth = useAuthStore();

definePageMeta({
    middleware: ["guest"],
});
const form = reactive({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
});
const errors = ref([]);
const handleSubmit = async () => {
    try {
        await auth.register(form);
    } catch (error) {
        errors.value = error.data.errors;
    }
};
</script>

<template>
    <div class="min-h-screen flex items-center">
        <div class="w-full">
            <div class="card bg-white p-8 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/3">
                <h3 class="text-center text-2xl font-semibold">User Registration</h3>

                <form @submit.prevent="handleSubmit">
                    <div class="mb-2">
                        <FormLabel for="name">Your Name</FormLabel>
                        <FormTextInput id="name" type="text" placeholder="your name" v-model="form.name" />

                        <span v-if="errors.name" class="text-red-500">{{ errors.name[0] }}</span>
                    </div>
                    <div class="mb-2">
                        <FormLabel for="email">Your Email</FormLabel>
                        <FormTextInput id="email" type="email" placeholder="email address" v-model="form.email" />

                        <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span>
                    </div>
                    <div class="mb-2">
                        <FormLabel for="password">Your Password</FormLabel>
                        <FormTextInput id="password" type="password" placeholder="password" v-model="form.password" />

                        <span v-if="errors.password" class="text-red-500">{{
                            errors.password[0]
                        }}</span>
                    </div>

                    <div class="mb-2">
                        <FormLabel for="password_confirmation">Retype Password</FormLabel>
                        <FormTextInput id="password_confirmation" type="password" placeholder="password_confirmation"
                            v-model="form.password_confirmation" />

                        <span v-if="errors.password_confirmation" class="text-red-500">{{
                            errors.password_confirmation[0]
                        }}</span>
                    </div>

                    <ButtonPrimary>Register</ButtonPrimary>
                </form>

                <SocialLogin />
            </div>
        </div>
    </div>
</template>
