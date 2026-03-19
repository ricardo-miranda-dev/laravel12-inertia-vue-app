<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import MagnifyingGlass from "@/Components/Icons/MagnifyingGlass.vue";
import Pagination from "@/Components/Pagination.vue";
import { usePage,Link } from "@inertiajs/vue3";

defineProps( {
    students:{
        type: Object,
        required: true,
    },
});

</script>

<template>
    <Head title="Create Student"></Head>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Students
            </h2>
        </template>
    <div class="bg-gray-100 py-10">
        <div class="mx-auto max-w-7xl">
            <div class="px-4 sm:px-6 lg:px-8">
                
                <div class="sm:flex sm:items-center">
                    
                    <div class="sm:flex-auto">
                        <!-- <h1 class="text-xl font-semibold text-gray-900">
                            Students
                        </h1> -->

                        <p class="mt-2 text-sm text-gray-700">
                            A list of all the Students.
                        </p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <Link
                                :href="route('students.create')"
                                class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Add Student
                            </Link>
                        
                    </div>

                    <!-- Search input -->
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <div class="relative">
                            
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlass />
                            </div>

                            <input
                                type="text"
                                placeholder="Search students..."
                                class="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                </div>

                <!-- Tabla de estudiantes -->
                <div class="mt-8 flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Created at</th>
                                            <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <!-- Fila provisional -->
                                        <tr v-for="student in students.data" :key="student.id">
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.id}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.name}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.email}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.class.name}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.section.name}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">{{student.created_at}}</td>
                                            <td class="px-4 py-2 text-sm text-gray-700">
                                                <button class="text-blue-500 hover:underline mr-2">Edit</button>
                                                <button class="text-red-500 hover:underline">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin tabla -->
                <Pagination :data="students"/>
            </div>
        </div>
    </div>
    </AuthenticatedLayout>
</template>