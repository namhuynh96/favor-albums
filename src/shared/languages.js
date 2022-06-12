const ENG = {
  languageSelection: "Language",
  albumForm: {
    title: "Create your new album",
    placeholder: "Album name",
    errorMessage: "Album name cannot be empty",
    button: "Add to list",
  },
  filters: {
    layout: {
      options: [
        { value: "list", children: "View as list" },
        { value: "grid", children: "View as grid" },
      ],
    },
    sortBy: {
      options: [
        { value: "id", children: "ID" },
        { value: "name", children: "Name" },
        { value: "date", children: "Date" },
      ],
      placeholder: "Sort by",
    },
  },
};

const VIE = {
  languageSelection: "Ngôn ngữ",
  albumForm: {
    title: "Tạo album mới",
    placeholder: "Tên album",
    errorMessage: "Tên album không thể trống",
    button: "Thêm vào thanh sách",
  },
  filters: {
    layout: {
      options: [
        { value: "list", children: "Xem theo list" },
        { value: "grid", children: "Xem theo bảng" },
      ],
    },
    sortBy: {
      options: [
        { value: "id", children: "ID" },
        { value: "name", children: "Tên" },
        { value: "date", children: "Ngày" },
      ],
      placeholder: "Lọc theo",
    },
  },
};

const languages = {
  eng: ENG,
  vie: VIE,
};

export default languages;
