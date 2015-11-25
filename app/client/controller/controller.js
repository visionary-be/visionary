/* Validate and insert/remove/modify survey */

Controller = {};

(function() {
        
        //Validate and insert survey
        Controller.InsertSurvey = function (surveyInput) {
                var survey = new Collection.Survey(surveyInput.name, surveyInput.root_url, surveyInput.state, 
                                        new Date().toLocaleString(), surveyInput.max_reset_counter);
                
                var isValidName = Validation.checkString(survey.name, "Nom de questionnaire");
                var isValidUrl = Validation.checkUrlRoot(survey.root_url);
                var isValidCounter = Validation.checkNumberPos(survey.max_reset_counter, "Compteur");
                var isValidState = Validation.checkState(survey.state);
                
                if (isValidName && isValidUrl && isValidCounter && isValidState) {
                        //Insert survey in mongoDB - call to server-side
                        Meteor.call('insertSurvey', survey, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion du questionnaire a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Remove survey
        Controller.RemoveSurvey = function (surveyId) {
                //Remove survey from mongoDB - call to server-side
                Meteor.call('removeSurvey', surveyId, function(error, result){
                        // display error or go on
                        if(error) {              
                                sAlert.error('La suppresion du questionnaire a échoué.');
                        } else {
                                sAlert.success('Suppression effectuée !');
                        }
                }); 
        }

        //Validate and insert module
        Controller.InsertModuleSurvey = function (moduleSurveyInput, surveyId) {
                var module_survey = new Collection.ModuleSurvey(moduleSurveyInput.order, moduleSurveyInput.title);
                
                var isValidOrder = Validation.checkNumberPos(module_survey.order, "Ordre");
                var isValidTitle = Validation.checkString(module_survey.title, "Titre");
                
                if (isValidOrder && isValidTitle) {
                        //Insert module in mongoDB - call to server-side
                        Meteor.call('insertModuleSurvey', module_survey, surveyId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion du module a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert picture
        Controller.InsertPictureAdmin = function (pictureInput, surveyId) {
                var picture_admin = new Collection.PictureAdmin(pictureInput.order, pictureInput.title, pictureInput.type, 
                                                        pictureInput.file_name);
                
                var isValidOrder = Validation.checkNumberPos(picture_admin.order, "Ordre");
                var isValidTitle = Validation.checkString(picture_admin.title, "Titre");
                var isValidType = Validation.checkString(picture_admin.type, "Type");
                var isValidFile = Validation.checkString(picture_admin.file_name, "Nom de fichier");
                
                if (isValidOrder && isValidTitle && isValidType && isValidFile) {
                        //Insert picture in mongoDB - call to server-side
                        Meteor.call('insertPictureAdmin', picture_admin, surveyId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion de l\'image a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert picture
        Controller.InsertInstruction = function (instr, pictureId, moduleId) {
                var instruction = new Collection.Instruction(instr.txt);
                
                var isValidTxt = Validation.checkString(instruction.txt, "Texte");
                
                if (isValidTxt) {
                        //Insert picture in mongoDB - call to server-side
                        Meteor.call('insertInstruction', instruction, pictureId, moduleId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion de l\'instruction a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert info_txt
        Controller.InsertInfoTxt = function (infoTxt, moduleId) {
                var info_txt = new Collection.InfoTxt(infoTxt.title, infoTxt.txt);
                
                var isValidTitle = Validation.checkString(info_txt.title, "Titre");
                var isValidTxt = Validation.checkString(info_txt.txt, "Texte");
                
                if (isValidTitle && isValidTxt) {
                        //Insert info_txt in mongoDB - call to server-side
                        Meteor.call('insertInfoTxt', info_txt, moduleId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion du texte d\'information a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert sorted_color_admin
        Controller.InsertSortedColorAdmin = function (sortedColor, moduleId) {
                var sorted_color = new Collection.SortedColorAdmin(sortedColor.order, sortedColor.color);
                
                var isValidNumber = Validation.checkNumberPos(sorted_color.order, "Ordre");
                var isValidColor = Validation.checkColor(sorted_color.color);
                
                if (isValidNumber && isValidColor) {
                        //Insert sorted_color_admin in mongoDB - call to server-side
                        Meteor.call('insertSortedColorAdmin', sorted_color, moduleId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion de la couleur a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert filter_admin
        Controller.InsertFilterAdmin = function (filterAdmin, moduleId) {
                var filter_admin = new Collection.FilterAdmin(filterAdmin.order, filterAdmin.parameter, filterAdmin.init_value,
                                                filterAdmin.min, filterAdmin.max, filterAdmin.conversion, filterAdmin.step);
                
                var isValidNumber1 = Validation.checkNumber(filter_admin.order, "Ordre");
                var isValidString = Validation.checkString(filter_admin.parameter, "Nom de filtre");
                var isValidNumber2 = Validation.checkNumber(filter_admin.init_value, "Valeur initiale");
                var isValidNumber3 = Validation.checkNumber(filter_admin.min, "Minimum");
                var isValidNumber4 = Validation.checkNumber(filter_admin.max, "Maximum");
                var isValidNumber5 = Validation.checkNumber(filter_admin.conversion, "Conversion");
                var isValidNumber6 = Validation.checkNumber(filter_admin.step, "Step");
                
                if (isValidNumber1 && isValidString && isValidNumber2 && isValidNumber3 && isValidNumber4 && isValidNumber5 
                                && isValidNumber6) {
                        //Insert survey in mongoDB - call to server-side
                        Meteor.call('insertFilterAdmin', filter_admin, moduleId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion du filtre a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
        //Validate and insert field_form
        Controller.InsertFieldForm = function (fieldForm, moduleId) {
                var field_form = new Collection.FieldForm(fieldForm.order, fieldForm.type, fieldForm.label,
                                                fieldForm.name, fieldForm.placeholder, fieldForm.required);
                
                var isValidNumber = Validation.checkNumberPos(field_form.order, "Ordre");
                var isValidType = Validation.checkString(field_form.type, "Type");
                var isValidName = Validation.checkString(field_form.name, "Nom");
                var isValidBool = Validation.checkBool(field_form.required, "Champ requis");
                
                if (isValidNumber && isValidType && isValidName && isValidBool) {
                        //Insert field_form in mongoDB - call to server-side
                        Meteor.call('insertFieldForm', field_form, moduleId, function(error, result){
                                // display error or go on
                                if(error) {              
                                        sAlert.error('L\'insertion du champ a échoué.');
                                } else {
                                        sAlert.success('Insertion effectuée !');
                                }
                        }); 
                }
        }
        
})();