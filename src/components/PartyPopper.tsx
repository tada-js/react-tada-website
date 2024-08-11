'use client';

import { Canvas } from '@react-three/fiber';
import ExplosionConfetti from '@/components/Confetti';

const PartyPopper = () => {
  return (
    <Canvas>
      <ExplosionConfetti
        isExploding={true}
        amount={150}
        rate={5}
        radius={50}
        areaWidth={5}
        areaHeight={2}
        fallingHeight={15}
        fallingSpeed={10}
        colors={[0x0073ff, 0xfddb27, 0xff0000]}
        enableShadows={true}
      />
    </Canvas>
  );
};

export default PartyPopper;
