import { useState } from "react";
import '../../styles/Wizard.css';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';

import ProgressBar from "./ProgressBar";

export default function Wizard() {

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        title: "",
        examName: "",
        targetDate: "",
        studyHours: 4,
        subjects: [],
        strengths: [],
        weaknesses: []
    });

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    return (
        <div className="wizard">

            <ProgressBar step={step} />

            {step === 1 && (
                <Step1
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            )}

            {step === 2 && (
                <Step2
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {step === 3 && (
                <Step3
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {step === 4 && (
                <Step4
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                />
            )}

        </div>
    );
}