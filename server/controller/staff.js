const Person = require('../Model/user');

const findAllStaff = async (req, res) => {
  try {
    let results = await Person.find({ role: 'staff' });
    if (results.length === 0)
      return res.status(401).json({
        message: 'No staff records yet',
      });

    res.status(200).json({
      status: true,
      message: 'staff records retrieved successfully',
      data: results,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: 'Something happened from the server',
    });
  }
};

const findFindById = async (req, res) => {
  const { id } = req.body;

  try {
    let result = await Person.FindFindById({ _id: id }, { role: 'staff' });
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'Staff not found',
      });

    return res.status(200).json({
      status: true,
      message: 'User retrived successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      statu: false,
      message: 'Somthing happened from the server',
    });
  }
};

const findStaffByUsername = async (req, res) => {
  const { username } = req.body;

  try {
    let result = await Person.find({ username }, { role: 'staff' });
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'Staff not found',
      });

    return res.status(200).json({
      status: true,
      data: result,
    });
  } catch (err) {
    return res.res.status(500).json({
      status: false,
      message: 'Something happened from the server',
    });
  }
};

const deleteStaffById = async (req, res) => {
  const { id } = req.body;
  try {
    let result = await Person.findByIdAndDelete({ _id: id }, { role: 'staff' });
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'Staff not found',
      });

    return res.status(200).json({
      status: true,
      message: 'Staff deactivated successfully',
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: `Something happened from the server: ${err}`,
    });
  }
};

module.exports = {
  findAllStaff,
  findStaffById,
  findStaffByUsername,
  deleteStaffById,
};
