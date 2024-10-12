import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://hevdlxedgheoasmulaur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldmRseGVkZ2hlb2FzbXVsYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MzEzOTcsImV4cCI6MjA0NDMwNzM5N30.sTufiGo0-7FLgoWv4uWTEFyEk0OK_54BGsgcZYtOtD4';
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Busca dados de uma tabela no banco Supabase. Equivalente a uma query SQL SELECT.
 * 
 * @param {string} tableName Nome da tabela a ser consultada  
 * @param {string[]} columns Array de colunas a serem retornadas 
 * @param {Object[]} filter Array de objetos com os filtros a serem aplicados na consulta
 * 
 * @example
 * fetchDataFromSuperbase('usuario', ['nomeUsuario', 'idadeUsuario'], [{ columnName: 'emailusuario', columnValue: teste#gmail.com }, { columnName: 'senhausuario', columnValue: teste123 }])
 */
async function fetchDataFromSuperbase(tableName, columns = null, filter = null) {
    let query = supabase.from(tableName).select(columns && columns.join(', '));
    if (filter && Array.isArray(filter)) {
        filter.forEach(f => {
            query = query.eq(f.columnName, f.columnValue);
        });
    }
    const { data, error } = await query;
    return { data, error }
}

export {
    fetchDataFromSuperbase
}