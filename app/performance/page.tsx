import TheHero from "@/components/the-hero/the-hero"
import performanceImage from '/public/performance.jpg'

export default function PerformancePage(){
    return (
        <div>
            <TheHero imageData={performanceImage} imageAlt="welding" title="We serve high performance applications" />
        </div>
    )
}