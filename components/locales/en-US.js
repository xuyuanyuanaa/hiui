export default {
  misc: {
    components: 'Basic Components'
  },
  datePicker: {
    ok: 'OK',
    to: 'to',
    placeholder: 'Select Date',
    dateChoose: 'Select Date',
    timeChoose: 'Select Time',
    undefinedType: 'undefined type',
    lastWeek: 'Nearly week',
    lastMonth: 'Nearly month',
    lastThreeMonth: 'Nearly three months',
    lastYear: 'Nearly year',
    month: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
    monthShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    week: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    placeholders: {
      date: 'Select Date',
      month: 'Select Month',
      year: 'Select Year',
      time: 'Select Time',
      daterange: 'Select Date',
      week: 'Select Week',
      weekrange: 'Select Week'
    },
    timePeriod: 'Period',
    hours: 'H',
    minutes: 'M',
    seconds: 'S',
    weekrange: function (year, week) {
      return year + '-W' + week
    }
  },
  pagination: {
    total: ['Total', 'items'],
    simple: ['The', 'page', '', 'pages', 'items'],
    item: '',
    itemPerPage: 'Items per page',
    goto: 'Goto',
    page: ''
  },
  cascader: {
    placeholder: 'Please select',
    noFoundTip: 'Not found'
  },
  select: {
    placeholder: 'Please select',
    noFoundTip: 'Not found'
  },
  upload: {
    buttonText: 'Upload',
    uploadSuccess: 'Success',
    uploadFailed: 'Failed',
    cancel: 'Cancel',
    delete: 'Delete',
    drag: 'Drag and drop files for uploading',
    dragTips: 'Please click or drag and drop file upload',
    dragTipsLimited: 'The number has reached the upper limit',
    preview: 'Preview',
    modalTiptitle: 'Upload failed',
    modalTiptxt: 'The upload file exceeds the specified upload file size',
    modalBtn: 'I know',
    modalTitle: 'Prompt'
  },
  modal: {
    confirmText: 'OK',
    cancelText: 'Cancel'
  },
  tabs: {
    more: 'more'
  },
  timeline: {
    expand: 'Expand',
    collapse: 'Collapse'
  },
  form: {
    colon: ':'
  },
  tree: {
    addNode: 'Add Node',
    addChildNode: 'Add Child Node',
    edit: 'Edit Node',
    del: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    nodePlaceholder: 'Please enter the node name',
    searchPlaceholder: 'Keyword search',
    searchEmptyResult: 'No serach results',
    modalTitle: 'Warning',
    delTips: 'Deleting a node will delete all child nodes, are you sure to delete this node?'
  }
}
