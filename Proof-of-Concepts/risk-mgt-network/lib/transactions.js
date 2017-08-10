/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Resident to resident transaction
 * @param {firm.risk.dltnet.ResidentToResident} UpdateValues - update coins and energy values
 * @transaction
 */
function ResidentToResident(UpdateValues) {

    var coinsChange = (UpdateValues.residentEnergyRate * UpdateValues.energyValue);

    UpdateValues.coinsInc.value = UpdateValues.coinsInc.value + coinsChange;
    UpdateValues.coinsDec.value = UpdateValues.coinsDec.value - coinsChange;
    UpdateValues.energyInc.value = UpdateValues.energyInc.value + UpdateValues.energyValue;
    UpdateValues.energyDec.value = UpdateValues.energyDec.value - UpdateValues.energyValue;

     var me = getCurrentParticipant();
     console.log('identity of the caller: ' + me);

    return getAssetRegistry('firm.risk.dltnet.Coins')
        .then(function (assetRegistry) {
            return assetRegistry.updateAll([UpdateValues.coinsInc,UpdateValues.coinsDec]);
        })                
        .then(function () {
            return  getAssetRegistry('firm.risk.dltnet.Energy')
            .then(function (assetRegistry) {
                return assetRegistry.updateAll([UpdateValues.energyInc,UpdateValues.energyDec]);
            });            
        });        
   
}


/**
 * Resident to bank transaction
 * @param {firm.risk.dltnet.ResidentToBank} UpdateValues - update coins and cash values
 * @transaction
 */
function ResidentToBank(UpdateValues) {

    var coinsChange = (UpdateValues.bankCashRate * UpdateValues.cashValue);

    UpdateValues.coinsInc.value = UpdateValues.coinsInc.value + coinsChange;
    UpdateValues.coinsDec.value = UpdateValues.coinsDec.value - coinsChange;
    UpdateValues.cashInc.value = UpdateValues.cashInc.value + UpdateValues.cashValue;
    UpdateValues.cashDec.value = UpdateValues.cashDec.value - UpdateValues.cashValue;

    var me = getCurrentParticipant();
    console.log('identity of the caller: ' + me);

    return getAssetRegistry('firm.risk.dltnet.Coins')
        .then(function (assetRegistry) {
            return assetRegistry.updateAll([UpdateValues.coinsInc,UpdateValues.coinsDec]);
        })                
        .then(function () {
            return  getAssetRegistry('firm.risk.dltnet.Cash')
            .then(function (assetRegistry) {
                return assetRegistry.updateAll([UpdateValues.cashInc,UpdateValues.cashDec]);
            });            
        });     
}


/**
 * Resident to utiliyu transaction
 * @param {firm.risk.dltnet.ResidentToUtility} UpdateValues - update coins and energy values
 * @transaction
 */
function ResidentToUtility(UpdateValues) {

    var coinsChange = (UpdateValues.utilityEnergyRate * UpdateValues.energyValue);

    UpdateValues.coinsInc.value = UpdateValues.coinsInc.value + coinsChange;
    UpdateValues.coinsDec.value = UpdateValues.coinsDec.value - coinsChange;
    UpdateValues.energyInc.value = UpdateValues.energyInc.value + UpdateValues.energyValue;
    UpdateValues.energyDec.value = UpdateValues.energyDec.value - UpdateValues.energyValue;

    var me = getCurrentParticipant();
    console.log('identity of the caller: ' + me);

    return getAssetRegistry('firm.risk.dltnet.Coins')
        .then(function (assetRegistry) {
            return assetRegistry.updateAll([UpdateValues.coinsInc,UpdateValues.coinsDec]);
        })                
        .then(function () {
            return  getAssetRegistry('firm.risk.dltnet.Energy')
            .then(function (assetRegistry) {
                return assetRegistry.updateAll([UpdateValues.energyInc,UpdateValues.energyDec]);
            });            
        }); 
   
}


