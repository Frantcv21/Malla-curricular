const cursos = [
    // Ciclo 1
    { nombre: "Química General", ciclo: 1, prerequisitos: [] },
    { nombre: "Biología", ciclo: 1, prerequisitos: [] },
    { nombre: "Matemática I", ciclo: 1, prerequisitos: [] },
    { nombre: "Expresión Gráfica", ciclo: 1, prerequisitos: [] },
    { nombre: "Redacción Técnica y Comunicación", ciclo: 1, prerequisitos: [] },
    { nombre: "Actividades Culturales y Deportivas", ciclo: 1, prerequisitos: [] },

    // Ciclo 2
    { nombre: "Química Orgánica", ciclo: 2, prerequisitos: ["Química General"] },
    { nombre: "Introducción a la Industria Alimentaria", ciclo: 2, prerequisitos: ["Biología"] },
    { nombre: "Matemática II", ciclo: 2, prerequisitos: ["Matemática I"] },
    { nombre: "Física I", ciclo: 2, prerequisitos: ["Matemática I"] },
    { nombre: "Legislación Alimentaria", ciclo: 2, prerequisitos: [] },

    // Ciclo 3
    { nombre: "Química de Alimentos", ciclo: 3, prerequisitos: ["Química Orgánica"] },
    { nombre: "Bioquímica", ciclo: 3, prerequisitos: ["Química Orgánica", "Biología"] },
    { nombre: "Matemática III", ciclo: 3, prerequisitos: ["Matemática II"] },
    { nombre: "Física II", ciclo: 3, prerequisitos: ["Física I"] },
    { nombre: "Ingeniería Económica y Financiera", ciclo: 3, prerequisitos: ["Matemática I"] },

    // Ciclo 4
    { nombre: "Análisis de Alimentos", ciclo: 4, prerequisitos: ["Química de Alimentos"] },
    { nombre: "Bioquímica de Alimentos", ciclo: 4, prerequisitos: ["Bioquímica"] },
    { nombre: "Matemática IV", ciclo: 4, prerequisitos: ["Matemática III"] },
    { nombre: "Físico Química", ciclo: 4, prerequisitos: ["Física II"] },
    { nombre: "Estadística", ciclo: 4, prerequisitos: ["Matemática II"] },

    // Ciclo 5
    { nombre: "Estadística para la Investigación", ciclo: 5, prerequisitos: ["Estadística"] },
    { nombre: "Aditivos y Conservantes", ciclo: 5, prerequisitos: ["Análisis de Alimentos"] },
    { nombre: "Microbiología General", ciclo: 5, prerequisitos: ["Bioquímica"] },
    { nombre: "Termodinámica", ciclo: 5, prerequisitos: ["Físico Química"] },
    { nombre: "Estática y Resistencia de Materiales", ciclo: 5, prerequisitos: ["Física II"] },
    { nombre: "Costos y Presupuestos", ciclo: 5, prerequisitos: ["Ingeniería Económica y Financiera"] },

    // Ciclo 6
    { nombre: "Evaluación Sensorial", ciclo: 6, prerequisitos: ["Análisis de Alimentos"] },
    { nombre: "Alimentación y Nutrición Humana", ciclo: 6, prerequisitos: ["Bioquímica de Alimentos"] },
    { nombre: "Microbiología de Alimentos", ciclo: 6, prerequisitos: ["Microbiología General"] },
    { nombre: "Refrigeración y Congelación de Alimentos", ciclo: 6, prerequisitos: ["Termodinámica"] },
    { nombre: "Administración y Gestión Empresarial", ciclo: 6, prerequisitos: ["Ingeniería Económica y Financiera"] },
    { nombre: "Comercialización de Alimentos", ciclo: 6, prerequisitos: ["Costos y Presupuestos"] },
    { nombre: "Inglés Técnico", ciclo: 6, prerequisitos: [] },

    // Ciclo 7
    { nombre: "Conservación de Alimentos", ciclo: 7, prerequisitos: ["Microbiología de Alimentos"] },
    { nombre: "Envases y Embalajes", ciclo: 7, prerequisitos: ["Refrigeración y Congelación de Alimentos"] },
    { nombre: "Tecnología de Bebidas", ciclo: 7, prerequisitos: ["Microbiología General"] },
    { nombre: "Ingeniería de Alimentos I", ciclo: 7, prerequisitos: ["Termodinámica"] },
    { nombre: "Maquinarias para la Industria Alimentaria", ciclo: 7, prerequisitos: ["Estática y Resistencia de Materiales"] },

    // Ciclo 8
    { nombre: "Tecnología de Frutas y Hortalizas", ciclo: 8, prerequisitos: ["Conservación de Alimentos"] },
    { nombre: "Tecnología de Carnes", ciclo: 8, prerequisitos: ["Refrigeración y Congelación de Alimentos"] },
    { nombre: "Proyectos de Inversión", ciclo: 8, prerequisitos: ["Administración y Gestión Empresarial"] },
    { nombre: "Ingeniería de Alimentos II", ciclo: 8, prerequisitos: ["Ingeniería de Alimentos I"] },
    { nombre: "Tesis I", ciclo: 8, prerequisitos: ["Estadística para la Investigación"] },

    // Ciclo 9
    { nombre: "Tecnología de Cereales", ciclo: 9, prerequisitos: ["Tecnología de Frutas y Hortalizas"] },
    { nombre: "Tecnología de Lácteos", ciclo: 9, prerequisitos: ["Tecnología de Carnes"] },
    { nombre: "Control de Calidad de Alimentos", ciclo: 9, prerequisitos: ["Conservación de Alimentos"] },
    { nombre: "Ingeniería de Alimentos III", ciclo: 9, prerequisitos: ["Ingeniería de Alimentos II"] },
    { nombre: "Tesis II", ciclo: 9, prerequisitos: ["Tesis I"] },

    // Ciclo 10
    { nombre: "Gestión de la Calidad e Inocuidad", ciclo: 10, prerequisitos: ["Control de Calidad de Alimentos"] },
    { nombre: "Gestión Ambiental", ciclo: 10, prerequisitos: ["Control de Calidad de Alimentos"] },
    { nombre: "Higiene y Seguridad Industrial", ciclo: 10, prerequisitos: ["Ingeniería de Alimentos III"] },
    { nombre: "Diseño de Plantas de Alimentos", ciclo: 10, prerequisitos: ["Ingeniería de Alimentos III"] },
    { nombre: "Automatización de la Industria Alimentaria", ciclo: 10, prerequisitos: ["Maquinarias para la Industria Alimentaria"] }
];

function renderMalla() {
    const container = document.getElementById('malla');
    container.innerHTML = '';

    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        const cicloDiv = document.createElement('div');
        cicloDiv.classList.add('ciclo');
        cicloDiv.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

        cursos.filter(curso => curso.ciclo === ciclo).forEach(curso => {
            const div = document.createElement('div');
            div.textContent = curso.nombre;
            div.classList.add('curso');

            if (curso.completado) {
                div.classList.add('completed');
            } else if (!prerequisitosCompletos(curso)) {
                div.classList.add('locked');
            }

            div.addEventListener('click', () => marcarCurso(curso));
            cicloDiv.appendChild(div);
        });

        container.appendChild(cicloDiv);
    }
}

function prerequisitosCompletos(curso) {
    return curso.prerequisitos.every(prereq =>
        cursos.find(c => c.nombre === prereq && c.completado)
    );
}

function marcarCurso(curso) {
    if (!prerequisitosCompletos(curso)) {
        alert('Debes completar los prerrequisitos primero.');
        return;
    }
    curso.completado = !curso.completado;
    renderMalla();
}

renderMalla();
