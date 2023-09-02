<script setup>
const auth = useAuthStore();
const form = reactive({
    email: null,
    password: null,
});
const errors = ref([]);
const handleSubmit = async () => {
    try {
        await auth.login(form);
    } catch (error) {
        errors.value = error.data.errors;
    }
};
</script>

<template>
    <div class="min-h-screen flex items-center">
        <div class="w-full">
            <div class="card bg-white p-8 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/3">
                <h3 class="text-center text-2xl font-semibold">User Login</h3>
                <form @submit.prevent="handleSubmit">
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
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>

                        <FormLabel class="ml-2" for="remember">Remember me</FormLabel>
                    </div>
                    <ButtonPrimary>Login</ButtonPrimary>
                </form>

                <SocialLogin />
            </div>
        </div>
    </div>
</template>
