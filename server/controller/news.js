const News = require('../models/news');

const createNews = async (req, res) => {
  const { title, subTitle, description } = req.body;
  try {
    let newNews = new News({
      title,
      subTitle,
      description,
    });
    return newNews
      .save()
      .then((d) =>
        res.status(200).json({
          status: true,
          message: 'News Saved Successfully',
        })
      )
      .catch((e) =>
        res.status(400).jdon({
          status: false,
          message: 'Unable to submit news',
        })
      );
  } catch {
    res.status(500).json({
      status: false,
      message: 'An error occurred',
    });
  }
};

const viewAllNews = async (req, res) => {
  try {
    const result = await News.find({});
    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'No news yet',
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: 'News successfully retrieved',
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message:
        'Something happened from our end, our Engineers have been notified!, meanwhile you may try again later',
    });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await News.findByIdAndDelete(id);
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'News not found',
      });

    return res.status(200).json({
      status: true,
      message: 'news deleted successfully',
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
      message: 'Server Error',
    });
  }
};

module.exports = {
  viewAllNews,
  createNews,
  deleteById,
};
