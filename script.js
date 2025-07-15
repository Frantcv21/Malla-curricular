const cursos = [
    // Ciclo 1
    { nombre: "Química General", ciclo: 1, prerequisitos: [], completado: false },
    { nombre: "Biología", ciclo: 1, prerequisitos: [], completado: false },
    { nombre: "Matemática I", ciclo: 1, prerequisitos: [], completado: false },
    { nombre: "Expresión Gráfica", ciclo: 1, prerequisitos: [], completado: false },
    { nombre: "Redacción Técnica y Comunicación", ciclo: 1, prerequisitos: [], completado: false },
    { nombre: "Actividades Culturales y Deportivas", ciclo: 1, prerequisitos: [], completado: false },

    // Ciclo 2
    { nombre: "Química Orgánica", ciclo: 2, prerequisitos: ["Química General"], completado: false },
    { nombre: "Introducción a la Industria Alimentaria", ciclo: 2, prerequisitos: ["Biología"], completado: false },
    { nombre: "Matemática II", ciclo: 2, prerequisitos: ["Matemática I"], completado: false },
    { nombre: "Física I", ciclo: 2, prerequisitos: ["Matemática I"], completado: false },
    { nombre: "Legislación Alimentaria", ciclo: 2, prerequisitos: [], completado: false },

    // Ciclo 3
    { nombre: "Química de Alimentos", ciclo: 3, prerequisitos: ["Química Orgánica"], completado: false },
    { nombre: "Bioquímica", ciclo: 3, prerequisitos: ["Química Orgánica", "Biología"], completado: false },
    { nombre: "Matemática III", ciclo: 3, prerequisitos: ["Matemática II"], completado: false },
    { nombre: "Física II", ciclo: 3, prerequisitos: ["Física I"], completado: false },
    { nombre: "Ingeniería Económica y Financiera", ciclo: 3, prerequisitos: ["Matemática I"], completado: false },

    // Ciclo 4
    { nombre: "Análisis de Alimentos", ciclo: 4, prerequisitos: ["Química de Alimentos"], completado: false },
    { nombre: "Bioquímica de Alimentos", ciclo: 4, prerequisitos: ["Bioquímica"], completado: false },
    { nombre: "Matemática IV", ciclo: 4, prerequisitos: ["Matemática III"], completado: false },
    { nombre: "Físico Química", ciclo: 4, prerequisitos: ["Física II"], completado: false },
    { nombre: "Estadística", ciclo: 4, prerequisitos: ["Matemática II"], completado: false },

    // Ciclo 5
    { nombre: "Estadística para la Investigación", ciclo: 5, prerequisitos: ["Estadística"], completado: false },
    { nombre: "Aditivos y Conservantes", ciclo: 5, prerequisitos: ["Análisis de Alimentos"], completado: false },
    { nombre: "Microbiología General", ciclo: 5, prerequisitos: ["Bioquímica"], completado: false },
    { nombre: "Termodinámica", ciclo: 5, prerequisitos: ["Físico Química"], completado: false },
    { nombre: "Estática y Resistencia de Materiales", ciclo: 5, prerequisitos: ["Física II"], completado: false },
    { nombre: "Costos y Presupuestos", ciclo: 5, prerequisitos: ["Ingeniería Económica y Financiera"], completado: false },

    // Ciclo 6
    { nombre: "Evaluación Sensorial", ciclo: 6, prerequisitos: ["Análisis de Alimentos"], completado: false },
    { nombre: "Alimentación y Nutrición Humana", ciclo: 6, prerequisitos: ["Bioquímica de Alimentos"], completado: false },
    { nombre: "Microbiología de Alimentos", ciclo: 6, prerequisitos: ["Microbiología General"], completado: false },
    { nombre: "Refrigeración y Congelación de Alimentos", ciclo: 6, prerequisitos: ["Termodinámica"], completado: false },
    { nombre: "Administración y Gestión Empresarial", ciclo: 6, prerequisitos: ["Ingeniería Económica y Financiera"], completado: false },
    { nombre: "Comercialización de Alimentos", ciclo: 6, prerequisitos: ["Costos y Presupuestos"], completado: false },
    { nombre: "Inglés Técnico", ciclo: 6, prerequisitos: [], completado: false },

    // Ciclo 7
    { nombre: "Conservación de Alimentos", ciclo: 7, prerequisitos: ["Microbiología de Alimentos"], completado: false },
    { nombre: "Envases y Embalajes", ciclo: 7, prerequisitos: ["Refrigeración y Congelación de Alimentos"], completado: false },
    { nombre: "Tecnología de Bebidas", ciclo: 7, prerequisitos: ["Microbiología General"], completado: false },
    { nombre: "Ingeniería de Alimentos I", ciclo: 7, prerequisitos: ["Termodinámica"], completado: false },
    { nombre: "Maquinarias para la Industria Alimentaria", ciclo: 7, prerequisitos: ["Estática y Resistencia de Materiales"], completado: false },

    // Ciclo 8
    { nombre: "Tecnología de Frutas y Hortalizas", ciclo: 8, prerequisitos: ["Conservación de Alimentos"], completado: false },
    { nombre: "Tecnología de Carnes", ciclo: 8, prerequisitos: ["Refrigeración y Congelación de Alimentos"], completado: false },
    { nombre: "Proyectos de Inversión", ciclo: 8, prerequisitos: ["Administración y Gestión Empresarial"], completado: false },
    { nombre: "Ingeniería de Alimentos II", ciclo: 8, prerequisitos: ["Ingeniería de Alimentos I"], completado: false },
    { nombre: "Tesis I", ciclo: 8, prerequisitos: ["Estadística para la Investigación"], completado: false },

    // Ciclo 9
    { nombre: "Tecnología de Cereales", ciclo: 9, prerequisitos: ["Tecnología de Frutas y Hortalizas"], completado: false },
    { nombre: "Tecnología de Lácteos", ciclo: 9, prerequisitos: ["Tecnología de Carnes"], completado: false },
    { nombre: "Control de Calidad de Alimentos", ciclo: 9, prerequisitos: ["Conservación de Alimentos"], completado: false },
    { nombre: "Ingeniería de Alimentos III", ciclo: 9, prerequisitos: ["Ingeniería de Alimentos II"], completado: false },
    { nombre: "Tesis II", ciclo: 9, prerequisitos: ["Tesis I"], completado: false },

    // Ciclo 10
    { nombre: "Gestión de la Calidad e Inocuidad", ciclo: 10, prerequisitos: ["Control de Calidad de Alimentos"], completado: false },
    { nombre: "Gestión Ambiental", ciclo: 10, prerequisitos: ["Control de Calidad de Alimentos"], completado: false },
    { nombre: "Higiene y Seguridad Industrial", ciclo: 10, prerequisitos: ["Ingeniería de Alimentos III"], completado: false },
    { nombre: "Diseño de Plantas de Alimentos", ciclo: 10, prerequisitos: ["Ingeniería de Alimentos III"], completado: false },
    { nombre: "Automatización de la Industria Alimentaria", ciclo: 10, prerequisitos: ["Maquinarias para la Industria Alimentaria"], completado: false }
];

function renderMalla() {
    const container = document.getElementById('malla');
    container.innerHTML = '';

    for (let ciclo = 1; ciclo <= 10; ciclo++) {
        const cicloDiv = document.createElement('div');
        cicloDiv.classList.add('ciclo');
        cicloDiv.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

        cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
            const div = document.createElement('div');
            div.textContent = curso.nombre;
            div.classList.add('curso');

            if (curso.completado) {
                div.classList.add('completed');
            } else if (prerequisitosCompletos(curso)) {
                div.classList.add('unlocked');
            } else {
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
    if (!prerequisitosCompletos(curso) && !curso.completado) {
        alert('Debes completar los prerrequisitos primero.');
        return;
    }
    curso.completado = !curso.completado;
    renderMalla();
}

renderMalla();
