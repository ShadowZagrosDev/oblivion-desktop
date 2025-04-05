import classNames from 'classnames';
import useDnsModal from './useDnsModal';
import Input from '../../Input';

interface DnsModalProps {
    title: string;
    isOpen: boolean;
    plainDns: string;
    DoH: string;
    onClose: () => void;
    setDefaultDns: () => void;
    setCustomDns: (plainDns: string, doh: string) => void;
}

export default function DnsModal({
    title,
    isOpen,
    plainDns,
    DoH,
    onClose,
    setDefaultDns,
    setCustomDns
}: DnsModalProps) {
    const {
        appLang,
        plainDnsInput,
        dohInput,
        showModal,
        handleCancelButtonClick,
        handleCancelButtonKeyDown,
        handlePlainDnsInputChange,
        handleDoHInputChange,
        handleOnClose,
        onSaveModalClick,
        onSaveModalKeyDown,
        handleClearInputs
    } = useDnsModal({
        isOpen,
        plainDns,
        DoH,
        onClose,
        setDefaultDns,
        setCustomDns
    });

    if (!isOpen) return <></>;

    return (
        <div className={classNames('dialog', !showModal ? 'no-opacity' : '')}>
            <div className='dialogBg' onClick={handleOnClose} role='presentation' />
            <div className='dialogBox'>
                <div className='container'>
                    <div className='line'>
                        <div className='miniLine' />
                    </div>
                    <h3>
                        {title}
                        <div className='labels'>
                            <div
                                role='presentation'
                                className={classNames(
                                    'label',
                                    'label-default',
                                    plainDnsInput === '' && dohInput === '' ? 'hidden' : ''
                                )}
                                onClick={handleClearInputs}
                            >
                                <i className='material-icons'>&#xf0ff;</i>
                                Clear
                            </div>
                        </div>
                    </h3>
                    <p>Plain DNS Server</p>
                    <div className='clearfix' />
                    <Input
                        id='modal_dns_input'
                        value={plainDnsInput}
                        tabIndex={0}
                        onChange={handlePlainDnsInputChange}
                        type='text'
                        placeholder='1.1.1.1'
                    />
                    <p>DoH(DNS-over-HTTPS) Server</p>
                    <div className='clearfix' />
                    <Input
                        id='modal_doh_input'
                        value={dohInput}
                        tabIndex={0}
                        onChange={handleDoHInputChange}
                        type='text'
                        placeholder='https://1.1.1.1/dns-query'
                    />
                    <div className='clearfix' />
                    <div
                        className={classNames('btn', 'btn-cancel')}
                        onClick={handleCancelButtonClick}
                        tabIndex={0}
                        role='button'
                        onKeyDown={handleCancelButtonKeyDown}
                    >
                        {appLang?.modal?.cancel}
                    </div>
                    <div
                        className={classNames(
                            'btn',
                            'btn-save',
                            plainDnsInput === '' || dohInput === '' ? 'disabled' : ''
                        )}
                        onClick={
                            plainDnsInput === '' || dohInput === '' ? () => {} : onSaveModalClick
                        }
                        tabIndex={0}
                        role='button'
                        onKeyDown={onSaveModalKeyDown}
                    >
                        {appLang?.modal?.update}
                    </div>
                </div>
            </div>
        </div>
    );
}
