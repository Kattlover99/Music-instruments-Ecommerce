/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file server.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Tuesday, 14th February 2023
 */

import * as build from "@remix-run/dev/server-build";
import { createRequestHandler } from "@remix-run/vercel";

export default createRequestHandler({ build, mode: process.env.NODE_ENV });