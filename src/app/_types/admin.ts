type SelectedOption = 'dashboard' | 'user' | 'model' | 'points' | 'board'

interface ModelValue {
  modelName: string
  accuracy: number
  loss: number
}
