export const bufferMap = {
  'mxs-1': 0.15,
}

export const lightTrainingDegreeMap = {
  'mxs-1': 0.7,
  'mxs-2': 0.85,
}

export const overloadIncreaseDegreeMap = {
  'mxs-1': 0.02,
  'mxs-2': 0.05,
}

export const deloadDegreeMap = {
  'mxs-1': [-0.1, -0.35],
}

export const cycleConfig = {
  'mxs-1': {
    group: [
      [4, 5, 5, 3, 5],
      [4, 4, 4, 3, 5],
    ],
    count: [
      [6, 5, 5, 5, 5],
      [5, 4, 3, 3, 3],
    ],
  },
  'mxs-2': {
    group: [[], []],
    count: [[], []],
  },
}

export const deloadWeekIndex = [3, 4]

export const tableColumn = [
  {
    label: '周',
    id: 'week',
  },
  {
    label: '组数',
    id: 'group',
  },
  {
    label: '次数',
    id: 'count',
  },
  {
    label: '绝对强度',
    id: 'absoluteStrength',
  },
  {
    label: '相对强度',
    id: 'relativeStrength',
  },
  {
    label: '训练负荷',
    id: 'trainingLoad',
  },
  {
    label: '容量',
    id: 'capacity',
  },
  {
    label: '轻训',
    id: 'lightTraining',
  },
]

export const RMCountRelation = {
  1: 1,
  2: 0.95,
  3: 0.93,
  4: 0.9,
  5: 0.87,
  6: 0.85,
  7: 0.83,
  8: 0.8,
  9: 0.77,
  10: 0.75,
  11: 0.7,
  12: 0.67,
  15: 0.65,
}
