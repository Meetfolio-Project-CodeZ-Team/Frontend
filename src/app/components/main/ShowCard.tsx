'use client'

import AI1 from '@/app/ui/svg/ai/AI1'
import AI2 from '@/app/ui/svg/ai/AI2'
import AI3 from '@/app/ui/svg/ai/AI3'
import Application1 from '@/app/ui/svg/application/Application1'
import Application2 from '@/app/ui/svg/application/Application2'
import Application3 from '@/app/ui/svg/application/Application3'
import Back1 from '@/app/ui/svg/back/Back1'
import Back2 from '@/app/ui/svg/back/Back2'
import Back3 from '@/app/ui/svg/back/Back3'
import Design1 from '@/app/ui/svg/design/Design1'
import Design2 from '@/app/ui/svg/design/Design2'
import Design3 from '@/app/ui/svg/design/Design3'
import Web1 from '@/app/ui/svg/web/Web1'
import Web2 from '@/app/ui/svg/web/Web2'
import Web3 from '@/app/ui/svg/web/Web3'
import { useEffect, useState } from 'react'

interface ShowCardProps {
  JOBKEYWORD: onlyJobType
}

const ShowCard = ({ JOBKEYWORD }: ShowCardProps) => {
  const componentsMap = {
    AI: [AI1, AI2, AI3],
    앱개발: [Application1, Application2, Application3],
    웹개발: [Web1, Web2, Web3],
    디자인: [Design1, Design2, Design3],
    백엔드: [Back1, Back2, Back3],
  }
  const [SelectedComponent, setSelectedComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const ComponentArray = componentsMap[JOBKEYWORD];
    const randomIndex = Math.floor(Math.random() * ComponentArray.length);
    const RandomComponent = ComponentArray[randomIndex];
    setSelectedComponent(() => RandomComponent);
  }, [JOBKEYWORD]);

  if (!SelectedComponent) return null;

  return <SelectedComponent />;
}

export default ShowCard
