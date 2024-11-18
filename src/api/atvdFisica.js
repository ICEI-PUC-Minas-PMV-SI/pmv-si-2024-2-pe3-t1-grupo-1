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
 
        // Função para aguardar o conteúdo carregar dentro da página com eventListener e em paralelo tenho a chamada da função assincrona
        document.addEventListener("DOMContentLoaded", async () => {
            const tableName = "AtividadeFisica"; 
            const { data, error } = await fetchDataFromSupabase(tableName); 
 
            if (error) {
                console.error('Erro ao buscar dados:', error.message); 
                return;
            }
 
            const containerTabela = document.querySelector("#data-container"); 
            containerTabela.innerHTML = ""; 
            data.forEach(activity => {
                const activityElement = document.createElement('div'); 
                activityElement.innerHTML = ` 
                    <p>${activity.nome}</p> 
                     <p>${activity.categoria}</p>
                    <p>${activity.duracao}</p>
                    <p>${activity.intensidade}</p>
                `;
                containerTabela.appendChild(activityElement); 
            });
        });