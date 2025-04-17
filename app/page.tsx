import {
  Code,
  Database,
  FileCode,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Twitter,
  Cpu,
  Braces,
  Globe,
  BarChart,
  Package,
  Clipboard,
  Search,
  CheckCircle,
  ShoppingBag,
  Pill,
  User,
  FileCheck,
  Scan,
  AlertCircle,
  CheckSquare,
  ArrowRight,
  Clock,
  Scale,
} from "lucide-react"
import ProfileHeader from "@/components/profile-header"
import AnimatedIcon from "@/components/animated-icon"
import ProcessFlowchart from "@/components/process-flowchart"
import PharmaIcon from "@/components/pharma-icon"

export default function Home() {
  const pickingPackingSteps = [
    {
      icon: <Search size={20} />,
      title: "Recepción de orden",
      description: "Recepción de la orden médica y validación en el sistema de historia clínica.",
    },
    {
      icon: <Clipboard size={20} />,
      title: "Generación de picking",
      description: "El sistema genera una lista de medicamentos a recolectar basada en la prescripción.",
    },
    {
      icon: <ShoppingBag size={20} />,
      title: "Picking",
      description: "Selección física de los medicamentos del inventario según la lista generada.",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Verificación",
      description:
        "Control de calidad para verificar que los medicamentos seleccionados coincidan con la prescripción.",
    },
    {
      icon: <Package size={20} />,
      title: "Packing",
      description: "Empaquetado de los medicamentos verificados para su distribución al paciente.",
    },
  ]

  const medicationAdminSteps = [
    {
      icon: <FileCheck size={20} />,
      title: "Prescripción médica",
      description: "El médico genera una prescripción en el sistema de historia clínica electrónica.",
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Validación farmacéutica",
      description: "El farmacéutico valida la prescripción, verificando dosis, interacciones y contraindicaciones.",
    },
    {
      icon: <Scan size={20} />,
      title: "Identificación del paciente",
      description: "Verificación de la identidad del paciente mediante código de barras o identificación biométrica.",
    },
    {
      icon: <Pill size={20} />,
      title: "Verificación del medicamento",
      description: "Escaneo del medicamento para confirmar que corresponde al prescrito para el paciente.",
    },
    {
      icon: <CheckSquare size={20} />,
      title: "Administración y registro",
      description: "Administración del medicamento al paciente y registro en tiempo real en el sistema.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <span className="text-blue-400">{"<"}</span>
            <span>Maria E. Flores R.</span>
            <span className="text-blue-400">{"/>"}</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="text-gray-300 hover:text-blue-400 transition-colors">
              Sobre mí
            </a>
            <a href="#tecnologias" className="text-gray-300 hover:text-blue-400 transition-colors">
              Tecnologías
            </a>
            <a href="#procesos" className="text-gray-300 hover:text-blue-400 transition-colors">
              Procesos
            </a>
            <a href="#experiencia" className="text-gray-300 hover:text-blue-400 transition-colors">
              Experiencia
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </nav>
          <button className="md:hidden text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Maria E. Flores R.
              <span className="block text-blue-400 mt-2">Especialista en Desarrollo de Software</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluciones tecnológicas eficientes y personalizadas para el sector salud
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                Visual Basic 6
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                Oracle APEX
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                JasperReports
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                GeneXus
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                SQL Server
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300">
                MySQL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <ProfileHeader />
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
                <div className="absolute inset-1 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:8px_8px]"></div>
                  <Code className="w-24 h-24 text-blue-400 relative z-10" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-blue-400 mr-2">🧑‍💻</span> Sobre mí
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Soy programador independiente con más de 9 años de experiencia en desarrollo de software, especializado
                en soluciones tecnológicas para el sector salud y clínicas. He participado en el diseño, desarrollo e
                implementación de sistemas de historia clínica electrónica, control de asistencias, integración con
                servicios web y automatización de reportes médicos y administrativos.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Además de mis habilidades en desarrollo, tengo amplios conocimientos en procesos farmacéuticos, picking
                y packing, dispensación de medicamentos y administración de inventarios, todo integrado con sistemas de
                historia clínica. Esta combinación de conocimientos técnicos y del sector me permite crear soluciones
                más efectivas y adaptadas a las necesidades reales del ámbito sanitario.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Trabajo con diversas herramientas y lenguajes como Visual Basic 6, GeneXus, Oracle APEX, Python y
                JasperReports, y tengo amplia experiencia en bases de datos como Oracle, SQL Server y MySQL. Me enfoco
                en entregar soluciones eficientes, funcionales y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-400 mr-2">🛠️</span> Tecnologías y habilidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group hover:shadow-lg hover:shadow-blue-900/20 duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AnimatedIcon icon={Braces} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">Lenguajes</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Visual Basic 6
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  PL/SQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  JavaScript
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group hover:shadow-lg hover:shadow-blue-900/20 duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AnimatedIcon icon={Monitor} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">Herramientas</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Oracle APEX
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  GeneXus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  JasperReports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Servicios Web
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group hover:shadow-lg hover:shadow-blue-900/20 duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AnimatedIcon icon={Database} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">Bases de datos</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Oracle
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  SQL Server
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  MySQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Optimización de consultas
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group hover:shadow-lg hover:shadow-blue-900/20 duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AnimatedIcon icon={Globe} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                Experiencia sectorial
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Sistemas de salud
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Historia clínica electrónica
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Reportes médicos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Integración con servicios web
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group md:col-span-2 lg:col-span-1 hover:shadow-lg hover:shadow-blue-900/20 duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AnimatedIcon icon={Cpu} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                Otras habilidades
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Optimización de consultas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Automatización de procesos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Desarrollo de aplicaciones web
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Desarrollo de aplicaciones de escritorio
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors group hover:shadow-lg hover:shadow-green-900/20 duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4">
                  <PharmaIcon type="pill" size={32} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">
                  Conocimientos Farmacéuticos y de Gestión Sanitaria
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <PharmaIcon type="pill" size={20} className="mr-2" />
                    <h4 className="font-medium">Procesos Farmacéuticos</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Conocimiento en flujos de trabajo y procesos de farmacia hospitalaria y ambulatoria.
                  </p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <PharmaIcon type="flask" size={20} className="mr-2" />
                    <h4 className="font-medium">Picking y Packing</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Experiencia en sistemas de selección, preparación y empaquetado de medicamentos.
                  </p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <PharmaIcon type="stethoscope" size={20} className="mr-2" />
                    <h4 className="font-medium">Dispensación de Medicamentos</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Conocimiento de protocolos y sistemas para la dispensación segura de medicamentos.
                  </p>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <PharmaIcon type="clipboard" size={20} className="mr-2" />
                    <h4 className="font-medium">Gestión de Inventarios</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Desarrollo de sistemas de control de inventario integrados con historia clínica electrónica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Processes Section */}
      <section id="procesos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-400 mr-2">⚕️</span> Procesos Farmacéuticos
          </h2>

          <div className="space-y-12">
            {/* Picking & Packing Flowchart */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Package className="text-blue-400 mr-3" size={24} />
                Proceso de Picking y Packing Farmacéutico
              </h3>

              <ProcessFlowchart title="Flujo de Picking y Packing Farmacéutico" steps={pickingPackingSteps} />

              <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-medium mb-4 text-blue-400">Beneficios del sistema de Picking y Packing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Reducción de errores en la dispensación de medicamentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Optimización del tiempo de preparación de medicamentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Trazabilidad completa del medicamento desde la prescripción hasta la administración
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Control de inventario en tiempo real</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Medication Administration Flowchart */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Pill className="text-blue-400 mr-3" size={24} />
                Administración Segura de Medicamentos
              </h3>

              <ProcessFlowchart title="Flujo de Administración Segura de Medicamentos" steps={medicationAdminSteps} />

              <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-medium mb-4 text-blue-400">
                  Seguridad en la administración de medicamentos
                </h4>
                <p className="text-gray-300 mb-4">
                  El sistema de administración segura de medicamentos implementa los "5 correctos" de la administración
                  de medicamentos:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-2">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <h5 className="font-medium text-blue-300">Paciente correcto</h5>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-2">
                      <Pill className="w-5 h-5 text-blue-400" />
                    </div>
                    <h5 className="font-medium text-blue-300">Medicamento correcto</h5>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-2">
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </div>
                    <h5 className="font-medium text-blue-300">Vía correcta</h5>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <h5 className="font-medium text-blue-300">Hora correcta</h5>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-2">
                      <Scale className="w-5 h-5 text-blue-400" />
                    </div>
                    <h5 className="font-medium text-blue-300">Dosis correcta</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-400 mr-2">💼</span> Experiencia como Programador Independiente
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-12 border-l-2 border-blue-400">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-md shadow-blue-500/50"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-400/20 text-blue-400 rounded-full mb-2">
                  2015 - Actualidad
                </span>
                <h3 className="text-xl font-bold">Desarrollador Freelance</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Desarrollo de sistemas personalizados para clínicas y centros médicos.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Implementación de sistemas de historia clínica, control de turnos y reportes clínicos.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Creación de reportes dinámicos con JasperReports.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Desarrollo en Oracle APEX para gestión hospitalaria.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>
                    Integración de sistemas con servicios web (validación de datos, interoperabilidad con otros
                    sistemas).
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Migración y mantenimiento de aplicaciones legacy (VB6, GeneXus).</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Implementación de sistemas de gestión farmacéutica con procesos de picking y packing.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Desarrollo de módulos de dispensación de medicamentos integrados con historia clínica.</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 mt-2 group-hover:scale-125 transition-transform"></span>
                  <span>Diseño de sistemas de administración de inventarios para farmacias hospitalarias.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Cover Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-400 mr-2">📸</span> Imagen de portada para LinkedIn
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="h-64 bg-gradient-to-r from-gray-900 to-blue-900 relative p-8 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Especialista en Desarrollo de Software
              </h3>
              <h4 className="text-xl text-blue-300 mb-4 relative z-10">
                Soluciones para el Sector Salud y Gestión Farmacéutica
              </h4>

              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Visual Basic 6</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Oracle APEX</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">JasperReports</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">GeneXus</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">SQL Server</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">MySQL</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Procesos Farmacéuticos</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Dispensación</span>
                <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">Gestión de Inventarios</span>
              </div>

              <div className="absolute right-8 bottom-8 flex space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                  <FileCode className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                  <BarChart className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

          <div className="max-w-lg mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg">
            <p className="text-gray-300 mb-6 text-center">
              Estoy disponible para nuevos proyectos y oportunidades de trabajo remoto o freelance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-400 transition-colors">Enviar email</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Github className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-400 transition-colors">GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-400 transition-colors">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} - Maria E. Flores R. | Especialista en Desarrollo de Software</p>
        </div>
      </footer>
    </main>
  )
}
