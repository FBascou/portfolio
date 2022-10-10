interface AboutInterface {
  name: string
  position: string
  description: string
  email: string
  mobile: string
  website: string
  github: string
  linkedin: string
}

interface SkillsInterface {
  frontend: string[]
  backend: string[]
  tools: string[]
  languages: string[]
}

interface WorkInterface {
  workList: any[]
}

interface EducationInterface {
  educationList: any[]
}

interface VolunteeringInterface {
  volunteeringList: any[]
}

export interface ResumeItemInterface
  extends AboutInterface,
    SkillsInterface,
    WorkInterface,
    EducationInterface,
    VolunteeringInterface {
  id: number
  header: string
}
