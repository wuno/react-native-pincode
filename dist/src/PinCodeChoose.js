"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const PinCode_1 = require("./PinCode");
class PinCodeChoose extends React.PureComponent {
    constructor(props) {
        super(props);
        this.endProcessCreation = (pinCode, isErrorValidation) => {
            this.setState({
                pinCode: isErrorValidation ? "" : pinCode,
                status: isErrorValidation ? PinCode_1.PinStatus.choose : PinCode_1.PinStatus.confirm
            });
        };
        this.endProcessConfirm = async (pinCode) => {
            if (pinCode === this.state.pinCode) {
                console.log("You just entered a pin code.");
                if (this.props.storePin) {
                    console.log("You just fired the function you passed in!");
                    this.props.storePin(pinCode);
                }
                // else {
                //   await Keychain.setInternetCredentials(
                //     this.props.pinCodeKeychainName,
                //     this.props.pinCodeKeychainName,
                //     pinCode);
                // }
                if (!!this.props.finishProcess)
                    this.props.finishProcess(pinCode);
            }
            else {
                this.setState({ status: PinCode_1.PinStatus.choose });
            }
        };
        this.cancelConfirm = () => {
            this.setState({ status: PinCode_1.PinStatus.choose });
        };
        this.state = { status: PinCode_1.PinStatus.choose, pinCode: "" };
        this.endProcessCreation = this.endProcessCreation.bind(this);
        this.endProcessConfirm = this.endProcessConfirm.bind(this);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: this.props.styleContainer
                ? this.props.styleContainer
                : styles.container },
            this.state.status === PinCode_1.PinStatus.choose && (React.createElement(PinCode_1.default, { endProcess: this.endProcessCreation, sentenceTitle: this.props.titleChoose, status: PinCode_1.PinStatus.choose, subtitle: this.props.subtitleChoose, buttonNumberComponent: this.props.buttonNumberComponent || null, passwordLength: this.props.passwordLength || 4, passwordComponent: this.props.passwordComponent || null, validationRegex: this.props.validationRegex, emptyColumnComponent: this.props.emptyColumnComponent, titleValidationFailed: this.props.titleValidationFailed || "PIN code unsafe", subtitleError: this.props.subtitleError || "Please try again", colorPassword: this.props.colorPassword || undefined, colorPasswordError: this.props.colorPasswordError || undefined, numbersButtonOverlayColor: this.props.numbersButtonOverlayColor || undefined, buttonDeleteComponent: this.props.buttonDeleteComponent || null, titleComponent: this.props.titleComponent || null, subtitleComponent: this.props.subtitleComponent || null, styleButtonCircle: this.props.styleButtonCircle, iconButtonDeleteDisabled: this.props.iconButtonDeleteDisabled, getCurrentLength: this.props.getCurrentLength, styleTextButton: this.props.styleTextButton, styleCircleHiddenPassword: this.props.styleCircleHiddenPassword, styleCircleSizeEmpty: this.props.styleCircleSizeEmpty, styleCircleSizeFull: this.props.styleCircleSizeFull, styleRowButtons: this.props.styleRowButtons, buttonDeleteText: this.props.buttonDeleteText, styleColumnButtons: this.props.styleColumnButtons, styleEmptyColumn: this.props.styleEmptyColumn, styleViewTitle: this.props.styleViewTitle, styleTextTitle: this.props.styleTextTitle, styleTextSubtitle: this.props.styleTextSubtitle, styleContainer: this.props.styleContainerPinCode, styleColumnDeleteButton: this.props.styleColumnDeleteButton, styleDeleteButtonColorShowUnderlay: this.props.styleDeleteButtonColorShowUnderlay, styleDeleteButtonColorHideUnderlay: this.props.styleDeleteButtonColorHideUnderlay, styleColorTitle: this.props.styleColorTitle, styleColorTitleError: this.props.styleColorTitleError, styleColorSubtitle: this.props.styleColorSubtitle, styleColorSubtitleError: this.props.styleColorSubtitleError, styleDeleteButtonIcon: this.props.styleDeleteButtonIcon, styleDeleteButtonSize: this.props.styleDeleteButtonSize, styleDeleteButtonText: this.props.styleDeleteButtonText, styleColorButtonTitle: this.props.styleColorButtonTitle, styleColorButtonTitleSelected: this.props.styleColorButtonTitleSelected, pinCodeVisible: this.props.pinCodeVisible, textPasswordVisibleFamily: this.props.textPasswordVisibleFamily, textPasswordVisibleSize: this.props.textPasswordVisibleSize })),
            this.state.status === PinCode_1.PinStatus.confirm && (React.createElement(PinCode_1.default, { endProcess: this.endProcessConfirm, sentenceTitle: this.props.titleConfirm, status: PinCode_1.PinStatus.confirm, cancelFunction: this.cancelConfirm, subtitle: this.props.subtitleConfirm, previousPin: this.state.pinCode, buttonNumberComponent: this.props.buttonNumberComponent || null, emptyColumnComponent: this.props.emptyColumnComponent, passwordLength: this.props.passwordLength || 4, passwordComponent: this.props.passwordComponent || null, titleAttemptFailed: this.props.titleAttemptFailed || "Incorrect PIN Code", titleConfirmFailed: this.props.titleConfirmFailed || "Your entries did not match", subtitleError: this.props.subtitleError || "Please try again", colorPassword: this.props.colorPassword || undefined, colorPasswordError: this.props.colorPasswordError || undefined, numbersButtonOverlayColor: this.props.numbersButtonOverlayColor || undefined, buttonDeleteComponent: this.props.buttonDeleteComponent || null, buttonDeleteText: this.props.buttonDeleteText, titleComponent: this.props.titleComponent || null, subtitleComponent: this.props.subtitleComponent || null, styleButtonCircle: this.props.styleButtonCircle, styleTextButton: this.props.styleTextButton, getCurrentLength: this.props.getCurrentLength, styleCircleHiddenPassword: this.props.styleCircleHiddenPassword, styleCircleSizeEmpty: this.props.styleCircleSizeEmpty, styleCircleSizeFull: this.props.styleCircleSizeFull, iconButtonDeleteDisabled: this.props.iconButtonDeleteDisabled, styleRowButtons: this.props.styleRowButtons, styleColumnButtons: this.props.styleColumnButtons, styleEmptyColumn: this.props.styleEmptyColumn, styleViewTitle: this.props.styleViewTitle, styleTextTitle: this.props.styleTextTitle, styleTextSubtitle: this.props.styleTextSubtitle, styleColorTitle: this.props.styleColorTitle, styleColorTitleError: this.props.styleColorTitleError, styleColorSubtitle: this.props.styleColorSubtitle, styleColorSubtitleError: this.props.styleColorSubtitleError, styleContainer: this.props.styleContainerPinCode, styleColumnDeleteButton: this.props.styleColumnDeleteButton, styleDeleteButtonColorShowUnderlay: this.props.styleDeleteButtonColorShowUnderlay, styleDeleteButtonColorHideUnderlay: this.props.styleDeleteButtonColorHideUnderlay, styleDeleteButtonIcon: this.props.styleDeleteButtonIcon, styleDeleteButtonSize: this.props.styleDeleteButtonSize, styleDeleteButtonText: this.props.styleDeleteButtonText, styleColorButtonTitle: this.props.styleColorButtonTitle, styleColorButtonTitleSelected: this.props.styleColorButtonTitleSelected, pinCodeVisible: this.props.pinCodeVisible, textPasswordVisibleFamily: this.props.textPasswordVisibleFamily, textPasswordVisibleSize: this.props.textPasswordVisibleSize }))));
    }
}
exports.default = PinCodeChoose;
let styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
