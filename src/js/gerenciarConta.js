
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"; 

const supabaseUrl = 'https://hevdlxedgheoasmulaur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldmRseGVkZ2hlb2FzbXVsYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MzEzOTcsImV4cCI6MjA0NDMwNzM5N30.sTufiGo0-7FLgoWv4uWTEFyEk0OK_54BGsgcZYtOtD4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchDataFromSupabase(tableName, columns = null, filter = null) {
    let query = supabase.from(tableName).select(columns && columns.join(', '));
    if (filter && Array.isArray(filter)) {
        filter.forEach(f => {
            query = query.eq(f.columnName, f.columnValue);
        });
    }
    const { data, error } = await query;
    return { data, error };
}

const userId =  localStorage.getItem('userId');

const getUserData = async () => {
    const tableName = "usuario";

    const { data, error } = await fetchDataFromSupabase(tableName); 
   
    if (error) {
        console.error('Erro ao buscar dados:', error.message);
        return;
    }

    const userData = data.find((data) => data.idusuario === Number(userId))

    if(!userData) {
        if (error) {
            console.error('Erro ao buscar informações do usuário (id):', userId);
            return;
        }
    }

    return userData
}

const fullfilUserForm = async () => {
    const userData = await getUserData()

    if(!userData) return

    const nameInput = document.getElementById("userNameInput")
    const userAgeInput = document.getElementById("userAgeInput")
    const userPhoneInput = document.getElementById("userPhoneInput")
    const userEmailInput = document.getElementById("userEmailInput")
    const userPasswordInput = document.getElementById("userPasswordInput")

    nameInput.value = userData.nomeusuario;
    userAgeInput.value = userData.idadeusuario.toString();
    userPhoneInput.value = userData.telefoneusuario;
    userEmailInput.value = userData.emailusuario;
    userPasswordInput.value = userData.senhausuario;
}

await fullfilUserForm()

