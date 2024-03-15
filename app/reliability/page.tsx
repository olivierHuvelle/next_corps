import TheHero from "@/components/the-hero/the-hero"
import reliabilityImage from '/public/reliability.jpg'

export default function ReliabilityPage(){
    return (
        <div>
            <TheHero imageData={reliabilityImage} imageAlt="welding" title="Super high reliability hoisting" />
        </div>
    )
}