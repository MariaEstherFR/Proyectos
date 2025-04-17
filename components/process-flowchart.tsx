"use client"

import type React from "react"

import { useState } from "react"

interface ProcessStepProps {
  icon: React.ReactNode
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}

const ProcessStep = ({ icon, title, description, isActive, onClick }: ProcessStepProps) => {
  return (
    <div
      className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-blue-900/50 border border-blue-400 shadow-lg shadow-blue-900/20"
          : "bg-gray-800/50 border border-gray-700 hover:border-blue-400"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
            isActive ? "bg-blue-400/20 text-blue-400" : "bg-gray-700 text-gray-300"
          }`}
        >
          {icon}
        </div>
        <h4 className={`font-medium ${isActive ? "text-blue-400" : "text-gray-200"}`}>{title}</h4>
      </div>
      <p className={`text-sm ${isActive ? "text-gray-200" : "text-gray-400"}`}>{description}</p>
    </div>
  )
}

interface FlowchartProps {
  title: string
  steps: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export default function ProcessFlowchart({ title, steps }: FlowchartProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>

      <div className="relative mt-8 pt-8 border-t border-gray-700">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4 py-1 text-sm text-gray-400">
          Detalles del proceso
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-medium mb-4 text-blue-400">{steps[activeStep].title}</h4>
          <p className="text-gray-300 mb-4">{steps[activeStep].description}</p>

          <div className="flex justify-between items-center">
            <button
              className="px-3 py-1 text-sm rounded border border-gray-600 text-gray-400 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              Anterior
            </button>

            <div className="text-sm text-gray-400">
              Paso {activeStep + 1} de {steps.length}
            </div>

            <button
              className="px-3 py-1 text-sm rounded border border-gray-600 text-gray-400 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
