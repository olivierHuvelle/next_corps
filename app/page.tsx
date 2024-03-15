import TheHero from "@/components/the-hero/the-hero"
import homeImage from '/public/home.jpg'

export default function Home() {
    return (
        <div>
            <TheHero imageData={homeImage} imageAlt="car factory" title="Professional Cloud Hosting" />
        </div>
    )
}
