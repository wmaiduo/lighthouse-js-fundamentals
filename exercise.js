const calculateRectangleArea = (length, width) => length * width > 0 ? length * width : undefined;
const calculateTriangleArea = (base, height) => base * height / 2 > 0 ? base * height / 2 : undefined;
const calculateCircleArea = (radius) => radius > 0 ? Math.PI * radius * radius : undefined;
