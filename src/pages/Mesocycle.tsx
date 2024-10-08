import { Navigate, useLoaderData } from "react-router-dom"
import { SectionHeader } from "../components/SectionHeader"
import { getAssetsUrl } from "../services/supabase"
import { MesocycleType } from "../lib/mesocycles"
import { IconCalendarDot, IconClock, IconTarget } from "@tabler/icons-react"
import { MesocycleCard } from "../components/MesocycleCard"
import { MesocycleDetails } from "../components/MesocycleDetails"

export const MesocyclePage = () => {
  const mesocycle = useLoaderData() as unknown as MesocycleType

  if (!mesocycle) return <Navigate to="/not-found" />

  return (
    <section>
      <SectionHeader
        title="Planning"
        breadcrumb={mesocycle.title}
        showBackButton
      />

      <img src={getAssetsUrl(mesocycle.image)} className="mb-8" />

      <h1 className="text-xl md:text-3xl text-projectGreen font-gtExtendedBold underline">
        {mesocycle.title} - {mesocycle.concept}
      </h1>

      <span className="text-md md:text-lg text-projectBlue font-gtExtended mt-4 block">
        {mesocycle.description}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <MesocycleCard
          icon={<IconClock width={24} height={24} color="#6bb8a4" />}
          text={`Duration: ${mesocycle.duration}`}
        />

        <MesocycleCard
          icon={<IconTarget width={24} height={24} color="#6bb8a4" />}
          text={`Concept: ${mesocycle.concept}`}
        />

        <MesocycleCard
          icon={<IconCalendarDot width={24} height={24} color="#6bb8a4" />}
          text={mesocycle.title}
        />
      </div>

      <h2 className="text-lg md:text-2xl text-projectGreen font-gtExtendedBold underline mt-10">
        Course Content
      </h2>

      <div className="flex flex-col gap-4 lg:gap-8 mt-8">
        {mesocycle.details.map((d, i) => (
          <MesocycleDetails
            key={i}
            title={d.title}
            description={d.description}
            details={d.details}
            section={d.section}
          />
        ))}
      </div>
    </section>
  )
}
