"use strict";

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
  }
}

module.exports = ProjectController;
