import React, { useState } from 'react';
import { Popover, Badge, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

function Wrapper(
  props: Omit<React.ComponentProps<typeof Popover>, 'opened' | 'onClose' | 'target' | 'children'>
) {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => {}}
      placement={props.placement}
      position={props.position}
      transitionDuration={0}
      bodyStyle={{ minWidth: 140, textAlign: 'center', pointerEvents: 'none' }}
      spacing="xs"
      noFocusTrap
      noClickOutside
      noEscape
      target={
        <Badge
          variant="light"
          color="blue"
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          {`${props.position}-${props.placement}`}
        </Badge>
      }
      withArrow
      gutter={10}
      className={props.className}
    >
      {`${props.position}-${props.placement}`}
    </Popover>
  );
}

export function PopoverPositionsDemo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => {
    const placements = (['start', 'center', 'end'] as const).map((placement) => (
      <Wrapper key={placement} position={position} placement={placement} />
    ));

    return (
      <Group key={position} position="center" style={{ marginTop: index !== 0 && 5 }}>
        {placements}
      </Group>
    );
  });

  return <CodeDemo>{tooltips}</CodeDemo>;
}
