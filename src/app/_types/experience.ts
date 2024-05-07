interface ExperienceDataTypes {
  title: string
  startDate: string
  endDate: string
  experienceType: string
  task: string
  motivation: string
  jobKeyword: string
  stack: string
  detail: string
  advance: string
  expStacks: string[]
}

interface ExpCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}
