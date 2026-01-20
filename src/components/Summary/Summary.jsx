import { FunctionalFeature } from './FunctionalFeature.jsx'
import { UserStoryFormat } from './UserStoryFormat.jsx'
import { ScenariosHowMany } from './ScenariosHowMany.jsx'
import { RubiksCube } from './RubiksCube.jsx'
import { HappyPath } from './HappyPath.jsx'

export function Summary() {
  return (
    <section className="card">
      <h2 className="cardTitle">Konspekts</h2>
      <FunctionalFeature />
      <UserStoryFormat />
      <ScenariosHowMany />
      <RubiksCube />
      <HappyPath />
    </section>
  )
}

