import TheHero from "@/components/the-hero/the-hero"
import scaleImage from '/public/scale.jpg'

export default function ScalePage(){
    return (
        <div>
            <TheHero imageData={scaleImage} imageAlt="steel factory" title="Scale your app to the moon" />
        </div>
    )
}