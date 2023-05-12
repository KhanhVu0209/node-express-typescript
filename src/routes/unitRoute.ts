import {Router} from 'express';
import * as unitCtrl from '../controllers/unitController';

const router = Router();

router.get('/unit', unitCtrl.FindAllUnit as any);
router.get('/unit/available', unitCtrl.FindAllUnitAvailable as any);
router.get('/unit/getUnitByCode', unitCtrl.FindUnitByCode as any);
router.get('/unit/:id', unitCtrl.FindUnitById as any);
router.route('/unit/insertUnit').post(unitCtrl.InsertUnit as any);
router.route('/unit/updateUnit').put(unitCtrl.UpdateUnit as any);
router.route('/unit/hideUnits').put(unitCtrl.HideUnits as any);
router.route('/unit/deleteUnits').delete(unitCtrl.DeleteUnits as any);

module.exports = router
