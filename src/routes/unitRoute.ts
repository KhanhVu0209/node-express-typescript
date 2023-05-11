import {Router} from 'express';
import * as unitCtrl from '../controllers/unitController';
// import * as authCtrl from '../controllers/auth.controller';
// import * as authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.get('/unit', unitCtrl.FindAllUnit as any);
// router.get('/unit/available', unitCtrl.FindAllUnitAvailable);
// router.get('/unit/:id', unitCtrl.FindUnitById);
// router.route('/unit/insertUnit').post(authMiddleware.AuthAdmin, unitCtrl.InsertUnit);
// router.route('/unit/updateUnit').put(authMiddleware.AuthAdmin, unitCtrl.UpdateUnit);
// router.route('/unit/hideUnits').put(authMiddleware.AuthAdmin, unitCtrl.HideUnits);
// router.route('/unit/deleteUnits').delete(authMiddleware.AuthAdmin, unitCtrl.DeleteUnits);

module.exports = router
