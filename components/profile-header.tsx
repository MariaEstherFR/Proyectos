export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-800 rounded-xl border border-gray-700 mb-8 shadow-lg">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:8px_8px]"></div>
        <span className="text-3xl font-bold text-white relative z-10">MF</span>
      </div>
      <h2 className="text-2xl font-bold text-white mb-1">Maria E. Flores R.</h2>
      <p className="text-blue-400 font-medium mb-4 text-lg">Especialista en Desarrollo de Software</p>
      <p className="text-gray-300 text-center max-w-md">
        Especializada en soluciones tecnológicas para el sector salud con más de 9 años de experiencia. Conocimientos en
        procesos farmacéuticos, dispensación de medicamentos y administración de inventarios integrados con sistemas de
        historia clínica.
      </p>
    </div>
  )
}
