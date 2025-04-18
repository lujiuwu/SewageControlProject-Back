// 路由信息
const admin_router = [
  {
    label: "首页",
    url: "home",
  },
  {
    label: "相关信息",
    children: [
      {
        label: "个人信息",
        url: "myinformation",
      },
      {
        label: "平台信息",
        url: "platforminformation",
      },
    ],
  },
  {
    label: "管理操作",
    children: [
      {
        label: "用户管理",
        url: "usermanagement",
      },
      {
        label: "问题管理",
        url: "problemmanagement",
      },
    ],
  },
  {
    label: "数据可视化",
    children: [
      {
        label: "数据分析",
        url: "dataanalyze",
      },
      {
        label: "污水实时数据",
        url: "datastand",
      }
    ],
  },
  {
    label:'预警系统',
    url:'warning'
  },
  {
    label:'检测界面',
    url:'warningdetection'
  }
]

const user_router = [
  {
    label: "首页",
    url: "home",
  },
  {
    label: "相关信息",
    children: [
      {
        label: "个人信息",
        url: "myinformation",
      },
      {
        label: "平台信息",
        url: "platforminformation",
      },
    ],
  },
  {
    label: "问题管理",
    children: [
      {
        label: "问题管理",
        url: "problemmanagement",
      },
    ],
  },
  {
    label: "数据可视化",
    children: [
      {
        label: "数据分析",
        url: "dataanalyze",
      }
    ],
  }
]

module.exports = [user_router,admin_router]
